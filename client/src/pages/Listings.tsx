import * as React from 'react';
import Card from '../containers/Card';
import styled from 'styled-components';
import {Grid,Row,Col,Drawer,Placeholder} from 'rsuite';
import Header from '../components/Header'

const Section = styled.section`
   padding-top:100px;
`
const Listings:React.FC = (props:any)=>{
	return <Section>
	 <SearchBox />
	 <Drawer />
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