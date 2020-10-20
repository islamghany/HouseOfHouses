import React from 'react';
import Header  from '../../components/Header'

 const HeaderContaiiner:React.FC = ()=>{
	return <Header>
		  <Header.Body>
		    <Header.Title>
		    	Looking For A House To Rent.
		    </Header.Title>
		    <Header.SubTitle>
		    We are aelping you make the best decisions in buying, selling, & renting your last minute locations.
		    </Header.SubTitle>
		    <Header.SearchBox>
		    </Header.SearchBox>
		  </Header.Body>
	</Header>
}

export default HeaderContaiiner