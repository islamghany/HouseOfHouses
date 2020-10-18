
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {Listing,Arg,ListingInput} from './types'


export const listingResolver:IResolvers = {
    Query:{
    	listing:async (_,{id}:Arg,{db,req}:{db:any,req:Request}):Promise<Listing>=>{
            try{
            	const listing = await db.Listing.findById(id);
            	if(!listing){
            		throw new Error("[APP]: User can't be found");
            	}
            	return listing
            }catch(err){
            	throw new Error(`[APP]: Failed to query user: ${err}`);
            }
    	}
    },
    Mutation:{
    	createListing:async (_,{
    		input
    	}:ListingInput,{db,req}:{db:any,req:Request}):Promise<Listing>=>{
    		
    		try{
    			const listing =new db.Listing({
    				...input,
                    host:"5f8bf481e4f5221560083426"
    			})
    			await listing.save();
    			return listing;
    		}catch(err){
    			throw new Error(`[APP]: Failed to query user: ${err}`);
    		}
    		
    	}
    }
}
