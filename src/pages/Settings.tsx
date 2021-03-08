import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import { TiDocument } from "react-icons/ti";
import { BsFillPlusCircleFill } from "react-icons/bs";
import './Settings.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from "../firebase";
import { useHistory } from "react-router-dom";


const Settings = () => {
  const history = useHistory();

  const [userState, setuserState] = useState<any>(null)

  useEffect(() => {
    getUserState().then(user => {

      if (user) {
        setuserState(user);
      }
    }
    )
  })


  const goBack = () => {
    window.history.back();
  };


  const logout = () => {
    firebase.auth().signOut().catch(err => {

      console.log(err);
    });
  }


  const getUserState = () => {
    return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
  }



  const logouttwo = () => {
    firebase.auth().signOut();
    setuserState(null);
    history.push("/Signin");
  }





  return (
    <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
      <Row>
        <Col lg="12" md="12" sm="12">
          <BiArrowBack size={20} onClick={goBack} className="seticon" />
          <h2 className="Settingheader">Settings</h2>

          <h1 className="headergeneral">General</h1>

          <div >
            <div className="setnotification" >
              <p><Link to={'Allnotify'} className="link-class-settings-notification">Notifications</Link></p>
              <IoIosArrowForward className="notifiicon" />
            </div>
            <div className="setcurrency">
              <p >Currency Preference</p>
              <IoIosArrowForward className="currcyicon" />
            </div>

            <div className="setalerts">
              <p >Alerts</p>
              <IoIosArrowForward className="alerticon" />
            </div>

            <div className="setpolicy">
              <p >Terms of Use & Privacy Policy</p>
              <IoIosArrowForward className="policyicon" />
            </div>

          </div>






          <h1 className="headerAcount">Account</h1>

          <div>
            <div className="hearderuserprofile">
              <p><Link to={'UserProfile'} className="link-class-settings-profile">User Profile</Link></p>
              <IoIosArrowForward className="accountarraw" />
            </div>
            <div className="headerchangepin">
              <p><Link to={'AddPin'} className="link-class-settings-pin">Change PIN</Link></p>
              <IoIosArrowForward className="accountarrawtwo" />
            </div>

            <div className="headerlogout">
              <p onClick={logouttwo}>Log Out</p>
              <IoIosArrowForward className="accountarrowthree" />
            </div>



          </div>







          <h1 className="headersocial">Social</h1>

          <div>
            <div className="headertelegram">
              <p >Telegram</p>
              <IoIosArrowForward className="forwardarrow" />
            </div>
            <div className="headertwiter">
              <p >Twitter</p>
              <IoIosArrowForward className="forwardarrowtwo" />
            </div>

            <div className="headermedium">
              <p >Medium</p>
              <IoIosArrowForward className="forwardarrowthree" />
            </div>


            <div className="shareapp">
              <p >Share the app</p>
              <IoIosArrowForward className="forwardarrowfour" />
            </div>



          </div>



          <div className="setfooter">

            <FiCopy className="copyicon" />
            <TiDocument className="documenticon" />
            <BsFillPlusCircleFill className="plusicon" />
            <AiOutlineStar className="staricon" />
            <IoIosSettings className="iossettingicon" />

          </div>



        </Col>
      </Row>
    </Container>
  )
}

export default Settings


