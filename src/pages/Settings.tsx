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
import Footer from "../component/Footer";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookShareCount,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import { FacebookIcon } from "react-share";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Settings = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }


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

  const shareApp = () => {
    console.log('myshare')
  }



  return (
    // <Container style={{ height: "100vh", minWidth: "200px", maxWidth: "420px" }}>
    // <Row>
    //   <Col lg="12" md="12" sm="12">
    <Container >
      <Row>
        <Col>
          <BiArrowBack size={20} onClick={goBack} className="seticon" />
          <h2 className="Settingheader">Settings</h2>
          <h1 className="headergeneral">General</h1>

          <div >
            <div className="setnotification" >
              <p><Link to={'Allnotify'} className="link-class-settings-notification">Notifications</Link></p>
              <Link to={'Allnotify'} > <IoIosArrowForward className="notifiicon" /> </Link>

            </div>
            <div className="setcurrency">
              <p>Currency Preference</p>
              <IoIosArrowForward className="currcyicon" />
            </div>

            <div className="setalerts">
              <p>Alerts</p>
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
              <Link to={'UserProfile'} >  <IoIosArrowForward className="accountarraw" /> </Link>
            </div>
            <div className="headerchangepin">
              <p><Link to={'AddPin'} className="link-class-settings-pin">Change PIN</Link></p>
              <Link to={'AddPin'} >  <IoIosArrowForward className="accountarrawtwo" /> </Link>
            </div>

            <div className="headerlogout">
              <p onClick={logouttwo}>Log Out</p>
              <Link to={'Signin'} onClick={logouttwo} >   <IoIosArrowForward className="accountarrowthree" /></Link>
            </div>
          </div>
          <h1 className="headersocial">Social</h1>
          <div>
            <div className="headertelegram">
              <a href="https://web.telegram.org/#/login"><p>Telegram</p></a>
              <a href="https://web.telegram.org/#/login"> <IoIosArrowForward className="forwardarrow" /></a>
            </div>
            <div className="headertwiter">
              <a href="https://twitter.com/"> <p >Twitter</p></a>
              <a href="https://twitter.com/">   <IoIosArrowForward className="forwardarrowtwo" /></a>
            </div>
            <div className="headermedium">
              <a href="https://medium.com/"> <p >Medium</p></a>
              <a href="https://medium.com/">  <IoIosArrowForward className="forwardarrowthree" /></a>
            </div>
            <Modal isOpen={modal} toggle={toggle}
            >
              <ModalBody>
                <FacebookShareButton
                  url={"http://www.camperstribe.com"}
                  quote={"CampersTribe - World is yours to explore"}
                  hashtag="#camperstribe"
                  className={'classes.socialMediaButton'}>
                  <FacebookIcon className="iconclass" size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={"http://www.camperstribe.com"}
                  className={'classes.socialMediaButton '}>
                  <TwitterIcon className="iconclass" size={32} round={true} />
                </TwitterShareButton>
                < LinkedinShareButton
                  url={"http://www.camperstribe.com"}
                  className={'classes.socialMediaButton'}>
                  <LinkedinIcon className="iconclass" size={32} round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton
                  url={"http://www.camperstribe.com"}
                  className={'classes.socialMediaButton'}>
                  <WhatsappIcon className="iconclass" size={32} round={true} />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={"http://www.camperstribe.com"}
                  className={'classes.socialMediaButton'}>
                  <TelegramIcon className="iconclass" size={32} round={true} />
                </TelegramShareButton>
                <Button className="button-class" onClick={() => toggle()}>X</Button>
                <h2 className="header-class">Share on social media</h2>
              </ModalBody>
            </Modal>
            <div className="shareapp" onClick={toggle}>

              <p >Share the app</p>
              <IoIosArrowForward className="forwardarrowfour" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )

}

export default Settings



