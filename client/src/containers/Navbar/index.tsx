import {Nav,Dropdown ,Icon} from 'rsuite';
import React from 'react'
import Navbar from '../../components/Navbar';
import {Link,withRouter} from 'react-router-dom';
const NavbarContainer:React.FC = (props:any)=>{
 console.log(props,props && props.location.pathname==="/" ? true : false)
 return <Navbar isHome={props && props.location.pathname==="/" ? true : false}>
    <Navbar.Header>
    <Link className="navbar-brand logo" to="/">
      HouseOfHouses
      </Link>
    </Navbar.Header>
     <Nav pullRight>
        <Link to="/create-listing">
        <Nav.Item icon={<Icon icon="cog" />} >add property</Nav.Item>
        </Link>
         <Link to="/signin">
         <Nav.Item >Signin</Nav.Item>
         </Link>
      </Nav>
    </Navbar>
    
}


// <Navbar2.Body>
//       <Nav>
//         <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
//         <Nav.Item>News</Nav.Item>
//         <Nav.Item>Products</Nav.Item>
//         <Dropdown title="About">
//           <Dropdown.Item>Company</Dropdown.Item>
//           <Dropdown.Item>Team</Dropdown.Item>
//           <Dropdown.Item>Contact</Dropdown.Item>
//         </Dropdown>
//       </Nav>

//     </Navbar.Body>
//   </Navbar2>
export default withRouter(NavbarContainer)