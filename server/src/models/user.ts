import {Schema,model,Types,Document} from 'mongoose';
import {Booking,Listing} from '../graphql/resolvers/types'
export interface User extends Document{
  _id:Types.ObjectId;
  name: string;
  avatar: string;
  email:string;
  walletId?:string;
  isAuthorize:boolean;
  income?:number;
  resetPasswordToken?:string;
  bookings:Types.ObjectId[] | Booking[];
  listings:Types.ObjectId[] | Listing[];
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
    isAuthorize:{
      type:Boolean,
      default:true
    },
    walletId:String,
    income: Number,
    token:String,
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
