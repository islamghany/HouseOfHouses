
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {UserSigninInput,UserSignupInput,Arg,User} from './types'


export const userResolver:IResolvers = {
    Query:{
    	user:async (_,{id}:Arg,{db,req}:{db:any,req:Request}):Promise<User>=>{
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
    	signup:async (_,{
    		input
    	}:UserSignupInput,{db,req}:{db:any,req:Request})=>{
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
