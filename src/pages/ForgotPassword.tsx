import React, { useState } from 'react';
import "./ForgotPassword.css";
import { Button, Input } from "reactstrap";
import { BiArrowBack } from 'react-icons/bi';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [recoverpass, setRecoverpass] = useState('')
    const handlerecover = () => {




        console.log('email msg:', recoverpass)
        console.log('hello password')
    }


    return (
        <div>
            <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
                <Row>
                    <Col lg="12" md="12" sm="12">

                        <div className="myicon">
                            <BiArrowBack />



                            <img src={coinapp} className="imageforgot" />
                        </div>

                        <div className="forgotpasspage">
                            <h1 >Forgot password</h1>
                        </div>

                        <div >
                            <p className="headingforgot">Enter your email and we'll send you</p>
                        </div>

                        <div >
                            <p className="subheadingforgot">instructions on how to reset your password.</p>
                        </div>


                        <div >
                            <Input type="text" value={recoverpass} onChange={(e) => setRecoverpass(e.target.value)}
                                className="inputforgot" placeholder="Enter your email address" />
                        </div>



                    </Col>
                </Row>

            </Container>
            <div >
                <Button className="recoverpass" onClick={handlerecover}><Link to={'Notifications'}> Recover password</Link></Button>
            </div>
        </div>

    )
}

export default ForgotPassword;
