// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAOFQkFbno3cK1Z5gPAGgA3XeSwXG1p0ro",

  authDomain: "yeyo-a2083.firebaseapp.com",

  projectId: "yeyo-a2083",

  storageBucket: "yeyo-a2083.appspot.com",

  messagingSenderId: "207340915617",

  appId: "1:207340915617:web:aba64b2387b841fcd659e0",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
