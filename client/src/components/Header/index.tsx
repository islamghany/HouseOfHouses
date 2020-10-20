import * as React from 'react';
import {HeaderContainer,HeaderBody,HeaderTitle,HeaderSubTitle,HeaderSearchBox,HeaderSearchBoxInput} from './style'
import {Button} from 'rsuite'
interface  Props{
	children:React.ReactNode
}
export default function Header({children}:Props){
	return <HeaderContainer>
	  {children}
	</HeaderContainer>
}

Header.Body  =  function Header({children}:Props){
	return <HeaderBody>
	  {children}
	</HeaderBody>
}

Header.Title  =  function Header({children}:Props){
	return <HeaderTitle>
	  {children}
	</HeaderTitle>
}
Header.SubTitle  =  function Header({children}:Props){
	return <HeaderSubTitle>
	  {children}
	</HeaderSubTitle>
}
Header.SearchBox =function Header({children}:Props){
	return <HeaderSearchBox>
	   <HeaderSearchBoxInput placeholder="Search by city name or by country name" />
	   <Button
	   color="green"
	   circle
	   style={{
	   	margin:'8px 20px 8px 5px',

	   }}
	   >Search</Button>
	</HeaderSearchBox>
}