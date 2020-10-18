import {Schema,model,Types} from 'mongoose';



const userSchema = new Schema({
    name:{
    	type:String,
    	required:true
    },
    avatar:{
    	type:String,
    	default:"true"
    },
    email:{
    	type:String,
    	required:true,
    	unique:true
    },
    password:{
    	type:String,
    	required:true
    },
    isAuthorize:{
      type:Boolean,
      default:false
    },
    walletId:String,
    income: Number,
    resetPasswordToken:String,
    bookings:[{
    	type:Types.ObjectId,
    	ref:"Booking"
    }],
    listings:[{
    	type:Types.ObjectId,
    	ref:"Listing"
    }]
});

export default model("User", userSchema)
