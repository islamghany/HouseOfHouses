
import {IResolvers} from 'apollo-server-express';
import {Request} from 'express';
import {Listing,Arg,ListingInput,ConnectionArgs,User as UserType} from './types'
import User from '../../models/user'; 
import mongoose from 'mongoose';
import DataLoader from 'dataloader';

const ListHost = async (hostIds:string[]) => {
  
  let Hosts = await User.find({
      _id : {$in:hostIds}
  })
   let GroupedByUser = hostIds.map ( hostId => {
    return Hosts.find( host =>{
        // console.log(typeof hostId,typeof host._id,host._id.toString() == hostId.toString())
        // if(host._id === hostId) console.log(hostId)
     return host._id.toString() === hostId.toString();
      })
  });
     //  console.log(GroupedByUser,Hosts)
  return GroupedByUser;
}
// @ts-ignore
const hostLoader = new DataLoader<string,UserType>(ListHost);

export const listingResolver:IResolvers = {
    Listing:{
        host: (parent )=>hostLoader.load(parent.host)
        // async(parent:Listing,args,{db}:{db:any})=>{
        //     try{
        //         console.log(parent.host)
        //         const host = await db.User.findOne({_id:parent.host});
        //         return host;
        //     }catch(err){
        //         throw new Error(`[APP]: Failed to query user: ${err}`);
        //     }
        // }
    },
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
    	},
        listings:async (_,{limit,page,keyword}:ConnectionArgs,{db}:any)=>{
            try{
                const listings =await db.Listing.find({
                    country:keyword
                }).skip((page-1) * limit).limit(limit)
                return {result:listings}
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
