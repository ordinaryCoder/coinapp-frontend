import firebase from "firebase";
import React, { useState } from "react";
import { messaging, onMessageListener } from "./firebase";
import Routes from "./Routes";

function App() {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  });
  React.useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    const token = await messaging.getToken({
      vapidKey:
        "BL0wL4I8JwV7PPjUYo7Ip8tYCAaeEWiV-DhbVmavlVmQksFiHDRnVLzvFapkvwTdBMbQxSDBveDUJxsOA3BkQng",
    });
    console.log(" fcm", token);
  };
  React.useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setAuthState({
            authenticated: true,
            initializing: false,
          });
        } else {
          setAuthState({
            authenticated: false,
            initializing: false,
          });
        }
      }),
    [setAuthState]
  );

  if (authentication.initializing) {
    return <div>Loading</div>;
  }
  onMessageListener()
    .then((payload) => {
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));
  return <Routes isAuthenticated={authentication.authenticated} />;
}

export default App;
