import {gql} from 'apollo-server-express';

export default gql`
   interface UserSafe {
    _id:ID!
    name:String!
    avatar:String!
    hasWallet:Boolean!
    email:String!
    isAuthorize:Boolean!
   }
   type User implements UserSafe {
    _id:ID!
    name:String!
    avatar:String!
    hasWallet:Boolean!
    email:String!
    isAuthorize:Boolean!
    income:Int!
    bookings(limit:Int!,page:Int!):BookingConnection!
    listings(limit:Int!,page:Int!):ListingConnection!
   }
   type Viewer implements UserSafe{
   	_id:ID!
    name:String!
    avatar:String!
    hasWallet:Boolean!
    email:String!
    isAuthorize:Boolean!
   }
   input UserSignupInput{
   	name:String!
   	email:String!
   	password:String!
   }
   input UserSigninInput{
   	email:String!
   	password:String!
   }
   extend type Query{
   	#viewer:Viewer!
     user(id:ID!):User!
   }
   extend type Mutation{
   	signup(input:UserSignupInput):Viewer!
   	signin(input:UserSigninInput):Viewer!
   }
  
`