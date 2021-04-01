import firebase from "firebase";
import React from "react";

function Push() {
    React.useEffect(() => {
        getToken();
    }, []);
    const getToken = async () => {
        const token = await firebase.messaging().getToken();
        console.log(" checking token", token);
    };
    return (
        <div>
            <h1>hi push</h1>
        </div>
    );
}

export default Push;
