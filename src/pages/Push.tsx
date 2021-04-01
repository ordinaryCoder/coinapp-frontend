import firebase from 'firebase';
import React from 'react'

function Push() {

    React.useEffect(() => {

        const msg = firebase.messaging();
        msg.requestPermission().then(() => {
            return msg.getToken();


        }).then((data) => {
            console.warn("token", data)

        })
    })
    return (
        <div>
            <h1>hi push</h1>
        </div>
    )
}

export default Push
