import {Schema,model,Types} from 'mongoose';
import {User} from './user';

export enum ListingType {
  Apartment = 'APARTMENT',
  House = 'HOUSE',
}

export interface Listing {
	_id:Types.ObjectId;
	title:string;
	description:string;
	image:string;
	address:string;
	countery:string;
	city:string;
	price:number;
	numOfGeuts:number;
	type:ListingType;
	host:Types.ObjectId | User;
	bookings:Types.ObjectId[];

}
const listingSchema = new Schema({
	title:{
		type:String,
		required:true,
	},
	description:{
		type:String,
		required:true,
	},
	image:{
		type:String,
		required:true,
	},
	address:{
		type:String,
		required:true,
	},
	countery:{
		type:String,
		required:true,
	},
	city:{
		type:String,
		required:true,
	},
	price:{
		type:Number,
		required:true,
	},
	numOfGeuts:{
		type:Number,
		default:0
	},
	type:{
       type:Number,
       enum:["HOUSE","APARTMENT"],
       default:"HOUSE"
	},
	host:{
		type:Types.ObjectId,
		ref:"User",
		required:true,
	},
	bookings:[{
		type:Types.ObjectId,
		ref:"Booking"
	}]

})

export default model("Listing",listingSchema);