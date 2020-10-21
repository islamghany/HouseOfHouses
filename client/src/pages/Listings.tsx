import * as React from 'react';
import Card from '../containers/Card';
import styled from 'styled-components';
import {Grid,Row,Col,Drawer,Placeholder} from 'rsuite';
import Header from '../components/Header';
import {useQuery,gql} from '@apollo/client';
import {GetListings_listings_result,GetListings,GetListingsVariables} from '../lib/GetListings'
const Section = styled.section`
   padding-top:100px;
`

const GET_LISTINGS = gql`
  query GetListings($limit:Int!,$page:Int!,$keyword:String!){
  listings(limit:$limit,page:$page,keyword:$keyword){
    result{
      country
      admin
      city
      _id
      address
      price
      image
      type
      numOfGuests
      description
      title
      host{
        name
        avatar
      }
    }
  }
}
`
const Listings:React.FC = (props:any)=>{
	const {data,loading} = useQuery<GetListings,GetListingsVariables>(GET_LISTINGS,
		{ variables:{ limit:10, page:1, keyword:"Canada" } } );
	
	return <Section>
	 <SearchBox />
	 <Drawer />
	 <h1>{data?.listings?.result ? data.listings.result.length : "Loading"} </h1>
	 <RowOfCards />
	</Section>
}

const SearchBox =React.memo(()=>{
	return <div>
	   <Header.SearchBox>
	   </Header.SearchBox>
	</div>
})
const RowOfCards = ()=>{
    return <div>

    </div>
}
export default Listings;