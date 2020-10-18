import {Schema,model,Types} from 'mongoose';



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