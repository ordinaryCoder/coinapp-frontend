import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAZyOL4v2X2dEnpzzaMKZbuKQCCtB6c-7s",
  authDomain: "coinapp-frontend.firebaseapp.com",
  databaseURL: "https://coinapp-frontend-default-rtdb.firebaseio.com",
  projectId: "coinapp-frontend",
  storageBucket: "coinapp-frontend.appspot.com",
  messagingSenderId: "871878861552",
  appId: "1:871878861552:web:0fcc8c9d5cc40f91fc1835",
  measurementId: "G-GTCCH28TK6",
};
//this.auth=firebase.auth();

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var realtime = firebase.database();
var messaging = firebase.messaging();
var auth = firebase.auth();
export default firebase;
export { db, realtime, messaging, auth };
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
