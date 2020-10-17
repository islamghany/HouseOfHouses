import {Schema,model,Types} from 'mongoose';
import {Listing} from './listing'
import {UserPayload} from './user';

export interface Booking{
    _id:Types.ObjectId;
    tenant:Types.ObjectId | UserPayload;
    listing:Types.ObjectId | Listing;
    checkOut:string;
}

const bookingSchema = new Schema({
	tenant:{
		type:Types.ObjectId,
		ref:"User",
		required:true,
	},
	listing:{
		type:Types.ObjectId,
		ref:"Listing",
		required:true,
	},
	checkOut:{
		type:String,
		required:true
	}
},{
	timestamps:true
})

export default model("Booking",bookingSchema)