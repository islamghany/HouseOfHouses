
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {Listing,Arg,ListingInput} from './types'
import {User} from '../../models/user';
import mongoose from 'mongoose'
export const listingResolver:IResolvers = {
    Query:{    	
        listing:async (_,{id}:Arg,{db,user}:{db:any,user:any}):Promise<Listing>=>{
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
        // creating new listing must be authorized
    	createListing:async (_,{
    		input
    	}:ListingInput,{db,user}:{db:any,user:any}):Promise<Listing>=>{
            // check if user exist
            if(!user) throw new Error(`[APP]: not authorized`);

            // making new listing
    		const createdListing =new db.Listing({
                    ...input,
                    host:user._id
                })

    		try{
               // making transaction so if one process faild, nothing will be saved
               // push the new created Listing to  the user lesting to sync the db
               //@ts-ignore
    			const session = await mongoose.startSession()
                session.startTransaction()
                await createdListing.save({session});
                user.listings.push(createdListing);
                await user.save({session});
                await session.commitTransaction();  
    			return createdListing;
    		}catch(err){
    			throw new Error(`[APP]: Failed to query user: ${err}`);
    		}
    		
    	}
    }
}
