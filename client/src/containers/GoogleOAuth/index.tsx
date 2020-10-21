import React from 'react';
import {GoogleLogin,GoogleLoginResponse,GoogleLoginResponseOffline} from 'react-google-login';
import {useMutation,gql} from '@apollo/client';
import {Signin,SigninVariables} from '../../lib/Signin'
import {viewer} from '../../helper/AuthRoute'
const singinUser = gql`
  mutation Signin($tokenId:String!){
  	signin(tokenId:$tokenId){
		    _id
	    avatar
	    email
	    hasWallet
	    name
  	}
  }
`

const SigninWithGoogle = ()=>{
	const [signin,{data,loading,client}] =useMutation<Signin,SigninVariables>(singinUser,{
    onCompleted:(data)=>{
      if(data?.signin?._id){
        client.writeQuery({
          query:viewer,
          data:{
            viewer:data.signin
          }
        })
      }
    }
  });
    const responseGoogle = (response:any) => {
       console.log(response);
       const {tokenId} = response;
       signin({
         variables:{tokenId:response?.tokenId},
       })
        // axios({
        //     method: 'POST',
        //     url: `${process.env.REACT_APP_API}/google-login`,
        //     data: { idToken: response.tokenId }
        // })
        //     .then(response => {
        //         console.log('GOOGLE SIGNIN SUCCESS', response);
        //         // inform parent component
        //         informParent(response);
        //     })
        //     .catch(error => {
        //         console.log('GOOGLE SIGNIN ERROR', error.response);
        //     });
    };
	return <GoogleLogin
    clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
}

export default SigninWithGoogle;