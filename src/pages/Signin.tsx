import React from "react";
import { Form, Input} from 'reactstrap';
import { Button } from 'reactstrap';
import './singnin.css';



export const Signin = () => {
  return <div className="background">
    <p className="header">sign up </p><p className="subheader">x</p>
        <h1 className="mainheading">Welcome back! </h1> 
        <h1 className="mainheadingtwo">You've been missed</h1>

    <Form>

    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email address" className="emailid"/>
    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your password" className="password" />
    <p className="forgotpass">Forget password?</p>
    <Button color="primary" className="signinbutton" >Sign in</Button>



    </Form>
  </div>;
};
