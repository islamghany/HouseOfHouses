import React from 'react';
import {NavbarContainer,NavbarHeader} from './style'

interface Props {
	children:React.ReactNode;
	isHome?:boolean;
}

export default  function Navbar({children,isHome}:Props){
	return <NavbarContainer isHome={isHome}>
	  {children}
	</NavbarContainer>
}

Navbar.Header =function ({children}:Props){
    return <NavbarHeader>
	  {children}
	</NavbarHeader>
}

