import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import "./UserProfile.css";
import { Container, Row, Col, Button, Input, } from "reactstrap";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setUserProfile } from "../userprofileredux/actions";
import { setCryptoObj } from "../reducer/FavList/action";
import { realtime } from "../firebase";



const UserProfile = (props: any) => {
  console.log("userprofile props", props)

  const dispatch = useDispatch();
  const [isEditing, editField] = useState(false);

  const [userProfile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })


  useEffect(() => {
    if (props.uid) {
      realtime.ref("users").child(`${props.uid}`).on("value", (snap) => {
        console.log("snap of user", snap.val());
        setProfile(snap.val())
      })

    }
  }, [props.uid])



  const handleEdit = () => {
    console.log("userprofile upodated isEWditing  ", isEditing, userProfile)
    if (!isEditing) {
      realtime.ref("users/").child(`${props.uid}`
      ).set(userProfile)
      console.log("userprofile upodated in firebase", userProfile)
      editField(!isEditing)
    } else {
      editField(!isEditing)
    }
  };


  return (
    <div>
      <Container
      >
        <Row className="parentrow">
          <Col>
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
                    email: evt.target.value
                  }))} value={userProfile.email} />
                </> :
                <>
                  <p className="userdetailsprofile">First name</p>
                  <p className="usermyname" >{userProfile.firstName}</p>
                  <p className="userdetailsprofile">Last name</p>
                  <p className="usermylastname">{userProfile.lastName}</p>
                  <p className="userdetailsprofileemail">Email address</p>
                  <p className="usermyemail">{userProfile.email}</p>
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

            <Button color="primary" className="user-profile-button" onClick={handleEdit} >
              {isEditing ? "Save" : "Edit"}
            </Button>


          </Col>
        </Row>
      </Container>
    </div>
  );
};



const mapStateToProps = (store: any) => ({
  uid: store.userReducer.uid,
});

export default connect(mapStateToProps, {})(UserProfile);
function fav(fav: any) {
  throw new Error("Function not implemented.");
}

