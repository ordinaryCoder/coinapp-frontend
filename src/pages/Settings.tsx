import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import { TiDocument } from "react-icons/ti";
import { BsFillPlusCircleFill } from "react-icons/bs";

import './Settings.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
      <Row>
        <Col lg="12" md="12" sm="12">

          <BiArrowBack className="seticon" />
          <h2 className="Settingheader">Settings</h2>

          <h1 className="headergeneral">General</h1>

          <div >
            <div className="setnotification" >
              <p><Link to={'Allnotify'}>Notifications</Link></p>
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
              <p><Link to={'UserProfile'}>User Profile</Link></p>
              <IoIosArrowForward className="accountarraw" />
            </div>
            <div className="headerchangepin">
              <p><Link to={'AddPin'}>Change PIN</Link></p>
              <IoIosArrowForward className="accountarrawtwo" />
            </div>

            <div className="headerlogout">
              <p >Log Out</p>
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
