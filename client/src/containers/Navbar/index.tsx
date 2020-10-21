import {Nav,Dropdown ,Icon} from 'rsuite';
import React from 'react'
import Navbar from '../../components/Navbar';
import {Link,withRouter} from 'react-router-dom';

const MyLink = React.forwardRef((props:any, ref:any) => {
  const { href, as, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});
const NavLink = (props:any) => <Nav.Item componentClass={MyLink} {...props} />;


const NavbarContainer:React.FC = (props:any)=>{
 return <Navbar isHome={props?.location?.pathname==="/" ? true : false}>
    <Navbar.Header>
    <Link className="navbar-brand logo" to="/">
      HouseOfHouses
      </Link>
    </Navbar.Header>
     <Nav pullRight>
        <NavLink href="/create-listing" icon={<Icon icon="cog" />} >add property</NavLink>
         <NavLink href="/signin" >Signin</NavLink>
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