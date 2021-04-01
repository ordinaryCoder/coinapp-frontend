import firebase from "firebase";
import React from "react";

function Push() {
<<<<<<< HEAD

    React.useEffect(() => {

        const msg = firebase.messaging();
        msg.requestPermission().then(() => {
            return msg.getToken();


        }).then((data) => {
            console.log("token", data)

        })
    })
    return (
        <div>
            <h1>hi push</h1>
        </div>
    )
=======
  React.useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    const token = await firebase.messaging().getToken();
    console.log("token", token);
  };
  return (
    <div>
      <h1>hi push</h1>
    </div>
  );
>>>>>>> 4ae66e79e432bcb305ab3c6fcceff6f2433a3c16
}

export default Push;
