import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACTIVE_POD_API_KEY,
    authDomain: process.env.REACTIVE_POD_AUTH_DOMAIN,
    databaseURL: "https://reactive-pod.firebaseio.com",
    projectId: "reactive-pod",
    storageBucket: "reactive-pod.appspot.com",
    messagingSenderId: process.env.REACTIVE_POD_MESSAGEING_SENDER_ID,
    appId: process.env.REACTIVE_POD_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
