import React from 'react'
import './Notifications.css';
import coinapp from './../assets/images/coinapp.png';
import { AiOutlineMail } from 'react-icons/ai';
import { Button } from 'reactstrap';



const Notification = () => {
    return (
        <div>

            <div >
                <img src={coinapp} className="imageNotifications" />
            </div>
            <div className="iconNotifications">
                <AiOutlineMail />
            </div>
            <div className="headingNotifications">
                <h1>Check your email</h1>
            </div>

            <div className="subheadingNotifications">
                <p>we've sent instructions on how to reset</p>
            </div>
            <div className="subheadingNotificationstwo">
                <p>The password(also check the spam folder).</p>
            </div>
            <Button color="primary" className="Notificationsbutton" >
                Go to email
        </Button>

        </div>

    )
}

export default Notification
