import React from 'react';
import "./ForgotPassword.css";
import { Button, Input } from "reactstrap";
import { BiArrowBack } from 'react-icons/bi';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';

const ForgotPassword = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Container style={{ minWidth: "200px", maxWidth: "420px" }}>
                <Row>
                    <Col lg="12" md="12" sm="12">

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
                            <Input type="text" className="inputforgot" placeholder="Enter your email address" />
                        </div>



                    </Col>
                </Row>

            </Container>

            <Button className="recoverpass">Recover password</Button>

        </div>

    )
}

export default ForgotPassword;
