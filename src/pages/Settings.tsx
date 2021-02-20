import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosArrowForward, IoIosSettings } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import { TiDocument } from 'react-icons/ti';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import './Settings.css'

const Settings = () => {
    return (
        <div className="backgroundsetting">
            <BiArrowBack className="seticon" />
            <h2 className="Settingheader">Settings</h2>

            <h1 className="headergeneral">General</h1>

            <div>
                <div >
                    <p className="setnotification">Notifications</p>
                    <IoIosArrowForward className="notifiicon" />
                </div>
                <div>
                    <p className="setcurrency">Currency Preference</p>
                    <IoIosArrowForward className="currcyicon" />
                </div>

                <div>
                    <p className="setalerts">Alerts</p>
                    <IoIosArrowForward className="alerticon" />
                </div>

                <div>
                    <p className="setpolicy">Terms of Use & Privacy Policy</p>
                    <IoIosArrowForward className="policyicon" />
                </div>

            </div>






            <h1 className="headerAcount">Account</h1>

            <div>
                <div >
                    <p className="hearderuserprofile">User Profile</p>
                    <IoIosArrowForward className="accountarraw" />
                </div>
                <div>
                    <p className="headerchangepin">Change PIN</p>
                    <IoIosArrowForward className="accountarrawtwo" />
                </div>

                <div>
                    <p className="headerlogout">Log Out</p>
                    <IoIosArrowForward className="accountarrowthree" />
                </div>



            </div>







            <h1 className="headersocial">Social</h1>

            <div>
                <div >
                    <p className="headertelegram">Telegram</p>
                    <IoIosArrowForward className="forwardarrow" />
                </div>
                <div>
                    <p className="headertwiter">Twitter</p>
                    <IoIosArrowForward className="forwardarrowtwo" />
                </div>

                <div>
                    <p className="headermedium">Medium</p>
                    <IoIosArrowForward className="forwardarrowthree" />
                </div>


                <div>
                    <p className="shareapp">Share the app</p>
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


        </div>
    )
}

export default Settings
