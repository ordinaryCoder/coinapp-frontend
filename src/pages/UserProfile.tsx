import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import './UserProfile.css';
import { Container, Row, Col } from 'reactstrap';


const UserProfile = () => {
    return (
        <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
            <Row>
                <Col lg="12" md="12" sm="12">

                    <div className="userprofileicon">
                        <BiArrowBack />
                        <p className="userprofileupper">User profile</p>
                    </div>

                    <h1 className="Headingdetails">
                        Account details
                </h1>
                    <div >
                        <p className="userdetailsprofile">
                            First name
                 </p>
                        <p className="usermyname">Premraj</p>
                        <p className="userdetailsprofilename">
                            Last name
                 </p>
                        <p className="usermylastname">Gavali</p>
                        <p className="userdetailsprofileemail">
                            Email address
                </p>
                        <p className="usermyemail">premrajgavali@gmail.com</p>

                    </div>
                    <div className="changepass">
                        <p >Change password</p>
                        <IoIosArrowForward className="forwardicon" />
                    </div>
                    <div className="deleteAccount">
                        <p >Delete account</p>
                        <IoIosArrowForward className="forwardicontwo" />
                    </div>



                </Col>
            </Row>
        </Container>

    )
}

export default UserProfile
