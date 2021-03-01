import React from 'react';
import "./AddPin.css";
import { BiArrowBack } from 'react-icons/bi';
import coinapp from './../assets/images/coinapp.png';
import { Button, Input } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';





const AddPin = () => {
    return (
        <div >
            <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
                <Row className="rowclass">
                    <Col lg="12" md="12" sm="12" className="newclasscol">


                        <div className="addpinicon">
                            <BiArrowBack />
                            <img src={coinapp} style={{ width: "25px" }} />
                        </div>
                        <div className="addpinheader">
                            <h1>Add a PIN</h1>
                        </div>

                        <div className="addpinsubheader">
                            <p>We want you to feel safe and secure.Add a PIN</p>
                        </div>

                        <div className="addsubheadertwo">
                            <p>and keep your portfolio secured from anybody.</p>
                        </div>




                        <div className="flex-container">
                            <div ><Input type="password" className="inputone" /></div>
                            <div><Input type="password" className="inputone" /></div>
                            <div><Input type="password" className="inputone" /></div>
                            <div><Input type="password" className="inputone" /></div>

                        </div>




                        <Button color="primary" className="savepinbutton" >Save PIN
         </Button>



                    </Col>

                </Row>

            </Container>

        </div>


    )
}

export default AddPin
