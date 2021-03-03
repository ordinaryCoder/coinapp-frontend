import React from 'react'
import './Notifications.css';
import coinapp from './../assets/images/coinapp.png';
import { AiOutlineMail } from 'react-icons/ai';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';




const Notification = () => {
    return (

        <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
            <Row>
                <Col lg="12" md="12" sm="12">
                    <div className="alldiv">

                        <div >
                            <img src={coinapp} className="imageNotifications" />
                        </div>
                        <div className="iconNotifications">
                            <AiOutlineMail />
                        </div>
                        <div className="headingNotifications">
                            <h1>Check your email</h1>
                        </div>

                        <div >
                            <p className="subheadingNotifications">we've sent instructions on how to reset</p>
                        </div>
                        <div >
                            <p className="subheadingNotificationstwo">The password(also check the spam folder).</p>
                        </div>
                        <Button className="Notificationsbutton" ><Link to={'Signin'} className="linkclassnotifi">
                            Go to email</Link>
                        </Button>

                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Notification
