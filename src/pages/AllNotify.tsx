import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import './AllNotify.css';
import Switch from "react-switch";
import { Container, Row, Col } from 'reactstrap';



const AllNotify = () => {

    const [Notification, setNotification] = useState([])

    const [toggleone, setToggleone] = useState(false)

    const [toggletwo, setToggletwo] = useState(false)

    const [togglethree, setTogglethree] = useState(false)

    const [togglefour, setTogglefour] = useState(false)





    return (

        <>
            <Container >
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <BiArrowBack className="backnotify" />
                        <h2 className="headernotify">Notifications</h2>




                        <div className="pushnotify" >
                            <p >Recieve push notifications</p>
                            <Switch onChange={setToggleone} checked={toggleone} uncheckedIcon={false} checkedIcon={false} onColor={'#0000FF'} />
                        </div>



                        <div className="updatenotify">
                            <p >End of day portfolio update</p>
                            <Switch onChange={setToggletwo} checked={toggletwo} uncheckedIcon={false} checkedIcon={false} onColor={'#0000FF'} />
                        </div>


                        <div className="releasenotify">
                            <p >New release available</p>
                            <Switch onChange={setTogglethree} checked={togglethree} uncheckedIcon={false} checkedIcon={false} onColor={'#0000FF'} />
                        </div>

                        <div className="othernotifications">
                            <p >Other notifications</p>
                            <Switch onChange={setTogglefour} checked={togglefour} uncheckedIcon={false} checkedIcon={false} onColor={'#0000FF'} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default AllNotify
