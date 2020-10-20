import React from 'react';
import {GalleryContainer,GalleryItem,GalleryHeader,GalleryItemLayer} from './style';
import {Grid,Col,Row} from 'rsuite' 

interface Props{
	children:React.ReactNode;
}
interface ItemProp{
	background:string;
	city:string;
}
export default function Gallery({children}:Props){
	return <GalleryContainer>
	   <GalleryHeader>
	   	   Big cities big Houses.
	   </GalleryHeader>
	  <Grid fluid>
	   <Row>
	   {children}
	   </Row>
	  </Grid>
	</GalleryContainer>
}
Gallery.Item = function({background,city}:ItemProp){
	return <Col xs={24} sm={12} md={6}>
	 <GalleryItem background={background}>
	   <GalleryItemLayer>
	   	    <h3 style={{color:"#fff", paddingRight:"10px"}}>{city}</h3>
	   </GalleryItemLayer>
	</GalleryItem>
	</Col>
}