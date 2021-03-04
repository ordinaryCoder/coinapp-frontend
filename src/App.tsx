import firebase from "firebase";
import React, { useState } from "react";
import Routes from "./Routes";

function App() {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  });

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

  return <Routes isAuthenticated={authentication.authenticated} />;
}

export default App;
