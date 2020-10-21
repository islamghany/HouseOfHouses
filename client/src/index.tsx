import * as React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'rsuite/dist/styles/rsuite-default.css';
import {ApolloProvider,gql} from '@apollo/client';
import client from './apollo'
// const GET_LISTINGS = gql`
//   query getListings($limit:Int!,$page:Int!,$keyword:String!){
//   listings(limit:$limit,$page:1,keyword:$keyword){
//     result{
//       country
//       admin
//       city
//       _id
//       address
//       price
//       image
//       type
//       numOfGuests
//       description
//       title
//       host{
//         name
//         avatar
//       }
//     }
//   }
// }
// `
render(
	<ApolloProvider client={client}>
	   <App />
	</ApolloProvider>   
	   ,document.querySelector('#root'))