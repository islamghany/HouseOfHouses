
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {UserSigninInput,UserSignupInput,Arg,User,ConnectionArgs,Listing,UserPayload} from './types'


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
    		
    	}
    }
}
