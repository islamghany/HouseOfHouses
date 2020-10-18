import {Schema,model,Types} from 'mongoose';


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
	country:{
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
       type:String,
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