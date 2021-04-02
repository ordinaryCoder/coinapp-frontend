import React, { useState, useEffect } from 'react';
import "./ForgotPassword.css";
import { Button, Input } from "reactstrap";
import { BiArrowBack } from 'react-icons/bi';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { auth } from "../firebase";
import firebase from "../firebase";
import { toast } from 'react-toastify';





const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    // const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL || "",
            handleCodeInApp: true,

        }
        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('')
                toast.success("check your email for reset password", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                console.log('succ pass')

            })
            .catch((error: any) => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                console.log('forgot pass error', error)
            })
        console.log('hii forgot')
    }



    return (
        <div>
            <Container >
                <Row >
                    <Col >

                        <div className="myicon">
                            <Link to={'/Signin'}> <BiArrowBack /> </Link>



                            <img src={coinapp} className="imageforgot" />
                        </div>

                        <div className="forgotpasspage">
                            <h1>Forgot password</h1>
                        </div>

                        <div >
                            <p className="headingforgot">Enter your email and we'll send you</p>
                        </div>

                        <div >
                            <p className="subheadingforgot">instructions on how to reset your password.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div >
                                <Input type="email"
                                    name="email"
                                    value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="inputforgot"
                                    placeholder="Enter your email address" />
                            </div>

                            <Button className="recoverpass">
                                <Link to={'Notifications'}
                                    className="link-class-recover-pass"> Recover password</Link></Button>

                        </form>
                    </Col>
                </Row>

            </Container>

        </div>

    )
}

export default ForgotPassword;

