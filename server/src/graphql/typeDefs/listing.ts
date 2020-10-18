import {gql} from 'apollo-server-express';

export default gql`
   type SuccessMessage{
   	message:String!
   }
   enum ListingType{
   	APARTMENT
   	HOUSE
   }
   interface ListingSafe{
   	title:String!
   	description:String!
   	image:String!
   	address:String!
   	type:ListingType!
   	country:String!
   	city:String!
   	price:Int!
   }
   type Listing implements ListingSafe{
   	_id:ID!
   	title:String!
   	description:String!
   	image:String!
   	host:User!
   	address:String!
   	type:ListingType!
   	country:String!
   	city:String!
   	price:Int!
   	numOfGuests:Int!
   	booking(limit:Int!,cursor:ID):BookingConnection!
   }
   type ListInfo{
   	hasNextPage:Boolean!
   	hasPrevousPage:Boolean! 
   	nextCursor:ID
   	prevCursor:ID  	
   }
   type ListingConnection{
   	result:[Listing]
   	total:Int
   	pageInfo:ListInfo
   }
   input ListingInput {
   	title:String!
   	description:String!
   	image:String!
   	address:String!
   	type:ListingType!
   	country:String!
   	city:String!
   	price:Int!
   }
   extend type Query{
   	listings(limit:Int,cursor:ID):ListingConnection
   	listing(id:ID!):Listing
   }
   extend type Mutation{
   	createListing(input:ListingInput):Listing
   	deleteListing(id:ID!):SuccessMessage
    updateListing(input:ListingInput):Listing
   }

`