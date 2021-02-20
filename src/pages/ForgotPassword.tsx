import React from 'react';
import "./ForgotPassword.css";
import { Button, Input } from "reactstrap";
import { BiArrowBack } from 'react-icons/bi';
import coinapp from './../assets/images/coinapp.png';

const ForgotPassword = () => {
    return (


        <div className="backgroundforgot">
            <div className="myicon">
                <BiArrowBack />



                <img src={coinapp} className="imageforgot" />
            </div>

            <div className="forgotpasspage">
                <h1 >Forgot password</h1>
            </div>

            <div className="headingforgot">
                <p >Enter your email and we'll send you</p>
            </div>

            <div className="subheadingforgot">
                <p >instructions on how to reset your password.</p>
            </div>


            <div >
                <Input type="text" className="inputforgot" />
            </div>

            <div >
                <Button className="recoverpass">Recover password</Button>
            </div>
        </div>


    )
}

export default ForgotPassword;
