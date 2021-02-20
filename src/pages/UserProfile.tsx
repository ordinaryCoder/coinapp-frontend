import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className="backgrounduserprofile">
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
            <div>
                <p className="deleteAccount">Delete account</p>
                <IoIosArrowForward className="forwardicontwo" />
            </div>


        </div>
    )
}

export default UserProfile
