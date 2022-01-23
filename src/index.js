import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQY3jXkV0qGrvLgJsjz6cZ0x2oqNiC4iM",
  authDomain: "clone-c1cd5.firebaseapp.com",
  projectId: "clone-c1cd5",
  storageBucket: "clone-c1cd5.appspot.com",
  messagingSenderId: "944566639258",
  appId: "1:944566639258:web:c455d31043e1457ded9d23",
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
