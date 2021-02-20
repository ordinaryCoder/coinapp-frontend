import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import './AllNotify.css';
import { Switch } from "antd";


const AllNotify = () => {


    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }






    return (
        <div className="allbody">

            <BiArrowBack className="backnotify" />
            <h2 className="headernotify">Notifications</h2>


            <div >
                <p className="pushnotify">Recieve push notifications</p>
                <div className="togglefirst" >
                    <Switch onChange={toggler} />
                    {toggle}
                </div>
            </div>


            <div>
                <p className="updatenotify">End of day portfolio update</p>
                <div className="togglesecond">
                    <Switch onChange={toggler} />
                    {toggle}
                </div>
            </div>


            <div>
                <p className="releasenotify">New release available</p>
                <div className="togglethird">
                    <Switch onChange={toggler} />
                    {toggle}
                </div>
            </div>

            <div>
                <p className="othernotifications">Other notifications</p>
                <div className="togglefourth">
                    <Switch onChange={toggler} />
                    {toggle}
                </div>
            </div>

        </div>
    )
}

export default AllNotify
