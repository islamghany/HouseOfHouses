import {Types} from 'mongoose';

export interface Booking{
    _id:Types.ObjectId;
    tenant:Types.ObjectId | User;
    listing:Types.ObjectId | Listing;
    checkOut:string;
}

export interface User{
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

// export interface UserPayload {
// 	_id?:String;
// 	name?:String;
// 	avatar?:String;
// 	email?:String;
// 	walletId?:String;
// 	bookings?:Types.ObjectId[] | Booking[];
//     listings?:Types.ObjectId[] | Listing[];
//}

// export interface Viewer {
//    token?:string;
//    user?:UserPayload
// }


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

export interface PageInfo{
	hasNextPaeg:Boolean;
	hasPreviousPage:Boolean;
	nextCursor?:string | Types.ObjectId;
	previous?:string | Types.ObjectId;
}
export interface ListingConnection {
	total?:number;
	result:Listing[];
    pageInfo?:PageInfo;
}
export interface BookingConnection {
	total?:number;
	result:Booking[];
    pageInfo?:PageInfo;
}
export interface ListingInput{
	input:{  
    title:string;
   	description:string;
   	image:string;
   	address:string;
   	type:ListingType;
   	country:string;
   	city:string;
   	price:number;
   }
}
export interface Arg{
	id:string;
}
export interface UserSignupInput{
   input:{
   	name:string;
   	email:string;
   	password:string;
   }
   }

export interface UserSigninInput{
   	email:string;
   	password:string;
}