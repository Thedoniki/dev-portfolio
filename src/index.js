import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB28cdd2fLxVfk5M3ughQLx8A65S0DionE",
  authDomain: "donikamehmeti-178e3.firebaseapp.com",
  projectId: "donikamehmeti-178e3",
  storageBucket: "donikamehmeti-178e3.appspot.com",
  messagingSenderId: "512851820888",
  appId: "1:512851820888:web:9c5300f50501d75ddb252d",
  measurementId: "G-PCJQ83LMBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line
const analytics = getAnalytics(app);

=======
>>>>>>> ffccc8e (Initialize project using Create React App)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
