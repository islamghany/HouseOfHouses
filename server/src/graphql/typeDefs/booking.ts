import {gql} from 'apollo-server-express';

export default gql`
  type Booking {
    id: ID!
    listing: Listing!
    tenant: User!
    checkIn: String
    checkOut: String!
  }
  type BookingConnection {
  	total:Int
  	result:[Booking!]!
  	pageInfo:ListInfo!
  }
`