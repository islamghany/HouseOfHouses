import styled from 'styled-components';

import { Navbar,Nav,Dropdown ,Icon} from 'rsuite';

interface NavbarProp{
  isHome:boolean;
}
export const NavbarContainer = styled(Navbar)<NavbarProp>`
       background:${p=>p.isHome ? "transparent" :p.theme.primary} !important;
       color:rgb(203, 213, 224) !important;
       position:absolute;
       width:100%;
       top:0;
       left:0;
       padding:0 30px;   
       .rs-nav-item-content{
     	 color:${p=>p.theme.text} !important;
     	  &:hover{
     	  	background:#fff !important;
     	  	color:${p=>p.theme.mainText} !important;
     	 }
       } 
`

export const NavbarHeader = styled(Navbar.Header)`
    
     display:flex;
     justify-content:center;
     align-items:center;
     a{
     	 color:${p=>p.theme.text} !important;
     	 font-size:20px;
     	 text-decoration:none;
     	 transition:all .3s;

     	 &:hover , &:active{
     	 	color:${p=>p.theme.white} !important;
     	 }
     }

`