import * as React from 'react';
import {Panel,Button} from 'rsuite'
import styled from 'styled-components';
const Section = styled.section`
  padding-top:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
`
const FormContaner =styled.div`
  width:450px;
  border-radius:10px;
  box-shadow:{p=>p.theme.boxShadow};
  padding:20px;
  background:#fff
`
const SignIn:React.FC = ()=>{
	return <Section>
	 <FormContaner>
	 <Button>
	 Signin with Google
	 </Button>
  </FormContaner>
	</Section>
}
export default SignIn;