import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCUUheEHmyt3pjZ4_aKQMl0yT0H9kn4j-c",
    authDomain: "class-storage-demo.firebaseapp.com",
    databaseURL: "https://class-storage-demo.firebaseio.com",
    projectId: "class-storage-demo",
    storageBucket: "class-storage-demo.appspot.com",
    messagingSenderId: "604664366056"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

