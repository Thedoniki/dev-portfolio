import { config } from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";

//import express from 'express' //https://github.com/dotenv-org/examples/blob/master/dotenv-express/index.mjs

config(); // https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables in case .env file is not loaded

// Import the functions you need from the SDKs you need
// import * as analytics from "./firebase/analytics";
import { initializeApp } from "./firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);// const analytics = analytics.getAnalytics(app);

const root = ReactDOM.createRoot(document.createElement("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
