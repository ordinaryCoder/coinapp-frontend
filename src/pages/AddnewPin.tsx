import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Button, Input } from 'reactstrap';
import './AddnewPin.css';
import coinapp from './../assets/images/coinapp.png';
import { Container, Row, Col } from 'reactstrap';


const AddnewPin = () => {
    return (
        <div>
            <Container >
                <Row >
                    <Col >


                        <div className="addnewpinicon">
                            <BiArrowBack />
                            <img src={coinapp} className="addnewpinimage" />
                        </div>
                        <div className="addnewpinheader">
                            <h1>Add a new PIN</h1>
                        </div>

                        <div className="addnewpinsubheader">
                            <p>We want you to feel safe and secure.Add a PIN</p>
                        </div>

                        <div className="addnewsubheadertwo">
                            <p>and keep your portfolio secured from anybody.</p>
                        </div>




                        <div className="newpincontainer">
                            <div><Input type="password" className="inputnewpinone" /></div>
                            <div><Input type="password" className="inputnewpinone" /></div>
                            <div><Input type="password" className="inputnewpinone" /></div>
                            <div><Input type="password" className="inputnewpinone" /></div>
                        </div>

                        <Button color="primary" className="newpinbutton" >Update PIN

</Button>



                    </Col>

                </Row>

            </Container>


        </div>

    )
}

export default AddnewPin
