import React from 'react';
import Gallery from '../../components/Gallery'
const GalleryContainer =()=>{
	return <Gallery>
	  <Gallery.Item  background={require('../../images/la.jpg')} city="Los Angolos" />
	  <Gallery.Item  background={require('../../images/golden-gate-bridge-1081782_640.jpg')} city="Chicago"/>
	  <Gallery.Item  background={require('../../images/dubai.jpg')} city="Dubai"/>
	  <Gallery.Item  background={require('../../images/london.jpg')} city="London"/>
	</Gallery>
}
export default GalleryContainer