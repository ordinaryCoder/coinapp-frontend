import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import "./UserProfile.css";
import { Container, Row, Col, Button, Input, } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUid } from "../reducer/user/actions";



const UserProfile = () => {

  const dispatch = useDispatch();
  const [isEditing, editField] = useState(false);
  const [userProfile, setProfile] = useState({
    firstName: "Premraj",
    lastName: "Gavali",
    emailId: "prem@gmail.com"
  })

  return (
    <div>
      <Container
        style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}
      >
        <Row className="parentrow">
          <Col lg="12" md="12" sm="12" style={{ height: "100%" }}>
            <div className="userprofileicon">
              <Link to={"/Settings"}>
                {" "}
                <BiArrowBack />{" "}
              </Link>
              <p className="userprofileupper">User profile</p>
            </div>

            <h1 className="Headingdetails">Account details</h1>





            <div>
              {isEditing ?
                <>
                  <p className="userdetailsprofilename" >First name</p>
                  <Input className="usermyname" placeholder="Enter your name" onChange={(evt) => setProfile(prevState => ({
                    ...prevState,
                    firstName: evt.target.value
                  }))} value={userProfile.firstName} />
                  <p className="userdetailsprofilename">Last name</p>
                  <Input className="usermylastname" placeholder="Enter your last name" value={userProfile.lastName}
                    onChange={(evt) => setProfile(prevState => ({
                      ...prevState,
                      lastName: evt.target.value
                    }))}
                  />
                  <p className="userdetailsprofileemail">Email address</p>
                  <Input className="usermyemail" placeholder="Enter your email address" onChange={(evt) => setProfile(prevState => ({
                    ...prevState,
                    emailId: evt.target.value
                  }))} value={userProfile.emailId} />
                </> :
                <>
                  <p className="userdetailsprofile">First name</p>
                  <p className="usermyname" >{userProfile.firstName}</p>
                  <p className="userdetailsprofile">Last name</p>
                  <p className="usermylastname">{userProfile.lastName}</p>
                  <p className="userdetailsprofileemail">Email address</p>
                  <p className="usermyemail">{userProfile.emailId}</p>
                </>
              }
            </div>




            <div className="changepass">
              <p>Change password</p>
              <IoIosArrowForward className="forwardicon" />
            </div>
            <div className="deleteAccount">
              <p>Delete account</p>
              <IoIosArrowForward className="forwardicontwo" />
            </div>

            <Button color="primary" className="user-profile-button" onClick={() => editField(!isEditing)} >
              {isEditing ? "Save" : "Edit"}
            </Button>


          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
