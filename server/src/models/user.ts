import {Schema,model,Document,Types} from 'mongoose';
import {Listing} from './listing'
import {Booking} from './booking'

export interface User extends Document{
  _id:Types.ObjectId;
  name: string;
  avatar: string;
  password: string;
  email:string;
  walletId?:string;
  income?:number;
  resetPasswordToken?:string;
  bookings:Types.ObjectId[] | Booking[];
  listings:Types.ObjectId[] | Listing[];
}

export interface UserPayload {
	_id?:String;
	name?:String;
	avatar?:String;
	email?:String;
	walletId?:String;
}

export interface Viewer {
   token?:string;
   user?:UserPayload
}

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

export default model<User>("User", userSchema)
