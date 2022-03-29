import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNOoNTbcHNeiN7vDzZ8XLdkH_Ex_iDPLA",
    authDomain: "voco-chat-client-fcf1a.firebaseapp.com",
    databaseURL: "https://voco-chat-client-fcf1a-default-rtdb.firebaseio.com",
    projectId: "voco-chat-client-fcf1a",
    storageBucket: "voco-chat-client-fcf1a.appspot.com",
    messagingSenderId: "74635925080",
    appId: "1:74635925080:web:1943e45249cc9e9e145c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
