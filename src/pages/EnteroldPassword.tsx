import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import './EnteroldPassword.css';
import coinapp from './../assets/images/coinapp.png';
import { Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


const EnteroldPassword = () => {
    return (
        <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
            <Row>
                <Col >
                    <div className="oldpassicon">
                        <BiArrowBack />
                        <img src={coinapp} className="oldpassimage" />
                        <div>
                            <div className="oldpassheader">
                                <h1>Enter old PIN</h1>
                            </div>

                            <div className="oldpasssubheader">
                                <p>Let's change your old PIN and set you up with</p>
                            </div>

                            <div className="oldpassubheadertwo">
                                <p>a brand new one</p>
                            </div>

                            <div className="flexoldpass">
                                <div ><Input type="password" className="inputoldpinone" /></div>
                                <div><Input type="password" className="inputoldpinone" /></div>
                                <div><Input type="password" className="inputoldpinone" /></div>
                                <div><Input type="password" className="inputoldpinone" /></div>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default EnteroldPassword
