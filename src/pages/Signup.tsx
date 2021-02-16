import React from "react";
import { Form, Input} from 'reactstrap';
import { Button } from 'reactstrap';
import './signup.css';


export const Signup = () => {
  return <div className="background">
     <p className="header">sign in</p>
      <span className="headerx">x</span>
  <h1 className="subheadersup">Lets create your</h1> 
  <h1 className="subheadertwosup">coinapp account</h1>

<Form>

<Input type="email" name="email" id="exampleEmail" placeholder="Enter your email address" className="email"/>
<Input type="email" name="email" id="exampleEmail" placeholder="Enter your password" className="password"/>
<p className="footer">By signing up you accept the Terms of Service and </p>
<p className="footertwo">Privacy Policy.</p>
<Button color="primary" className="signupbutton" >Sign up</Button>



</Form>
</div>;
};
