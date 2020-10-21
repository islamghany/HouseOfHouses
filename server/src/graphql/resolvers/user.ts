
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {UserSigninInput,SigninArgs,Viewer,UserSignupInput,Arg,User,ConnectionArgs,Listing,UserPayload} from './types'
import {Google} from '../../libs/Google';
import crypto from 'crypto';
import  { OAuth2Client,LoginTicket} from 'google-auth-library';
import jwt from 'jsonwebtoken'
// const signinViaGoogle = async (code:string,token:string,db:any):Promise<User|undefined>=>{
//     const user =await Google.login(code);
//     if(!user){
//         throw new Error("google login error");
        
//     }
//     const userNamesList = user.names && user.names.length ?user.names :null;
//     const userPhotosList = user.photos && user.photos.length ?user.photos :null;
//     const userEmailsList = user.emails && user.emails.length ?user.emails :null;
     
     

// }
export const userResolver:IResolvers = {
    User:{
      listings:async (user:User,{limit,page}:ConnectionArgs,{db}:{db:any})=>{
           try{
            const listings = await db.Listing.find({
                _id:{$in: user.listings}
            }).skip((page-1) * limit).limit(limit);
            return {
                result:listings,
                total:listings.length,
                pageInfo:{
                hasNextPage:(page-1) * limit < listings.length,
                hasPrevious:page != 1
            }};
           }catch(err){
                throw new Error(`[APP]: Failed to query user: ${err}`);
            }
      }
    },
    Query:{
        viewer: async (_,{id}:Arg,{user}:{user:any})=>{
           return null
        },
    	user:async (_,{id}:Arg,{db}:{db:any}):Promise<User>=>{
            try{
            	const user = await db.User.findById(id);
            	if(!user){
            		throw new Error("[APP]: User can't be found");
            	}
            	return user
            }catch(err){
            	throw new Error(`[APP]: Failed to query user: ${err}`);
            }
    	},
        authUrl: ()=>{
           try{ 
            return Google.authUrl;
        }catch(err){
          throw new Error(`[APP]: Failed to query user: ${err}`);
        }
        }
    },
    Mutation:{

    	signup:async (_,{input}:UserSignupInput,{db,req}:{db:any,req:Request})=>{
    		const {email,name,password} = input;
    		try{
    			const user =new db.User({
    				email,
    				name,
    				password
    			})
    			await user.save();
    			return user;
    		}catch(err){
    			throw new Error(`[APP]: Failed to query user: ${err}`);
    		}
    		
    	},
        signin:async (_,{tokenId}:SigninArgs,{db,req}:{db:any,req:Request})=>{
         const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);
         let res:LoginTicket
     try{
        res = await client.verifyIdToken({ idToken:tokenId, audience: process.env.GOOGLE_CLIENTID });    
       if(!res){
          throw new Error("Google login failed. Try again");
         } 
     }catch(err){
      throw new Error("Google login failed. Try again");
     }
      //@ts-ignore
      const { email_verified, name, email } = res.payload;
      //@ts-ignore
      console.log(res.payload)
      if(email_verified){
      let existingUser:User;
      try{
        existingUser = await db.User.findOne({email});  
      }catch(err){
         throw new Error("Google login failed. Try again");    
      }
      if(existingUser){
        const token = jwt.sign({ _id: existingUser._id }, `${process.env.JWT_SECRET}`, { expiresIn: '1y' });
        return existingUser;
      }
      let user= new db.User({ name, email });
      try{
       await user.save();
      }catch(err){
       throw new Error("Google login failed. Try again");
         
      }
      const token = jwt.sign({ _id: user._id },  `${process.env.JWT_SECRET}`, { expiresIn: '1y' });
      return user;

    }else{
      throw new Error("Google login failed. Try again");
      
    }
        },
        signout:()=>{
            return "Mutation.signout"
        }
    },
    Viewer:{
        hasWallet:(viewer:Viewer):boolean|undefined=>{
            return viewer.walletId ? true : undefined
        }
    }
}
