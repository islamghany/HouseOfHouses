import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {gql,useQuery} from "@apollo/client";
import {Viewer} from '../lib/Viewer'
export const viewer = gql`
   query Viewer{
      viewer{
      	_id
	    avatar
	    email
	    hasWallet
	    name
      }
   }
`
interface Props{
	type:string;
	children:React.ReactNode;
	path:string;
}
const AuthRouter:React.FC<Props> = ({type,children,path})=>{
	const {data,loading} = useQuery<Viewer>(viewer);
    const isAuth  = data?.viewer?._id ? true : false;
	return <Route 
	path={path} 
	render={()=>{
		if(loading) return <h1>loading</h1>;
		if(type === "guest" && isAuth) return <Redirect to="/dashboard" />;
	    if(type === "private" && !isAuth) return <Redirect to="/signin" />;
	    return <div>
	    {children}
	    </div> 
	}}
	/>
}
export default AuthRouter;