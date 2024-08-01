// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import 'firebase/firestore'
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK15oDSisVYGDGN62msfChDRflQ2fAros",
  authDomain: "internet-shop-orgtex.firebaseapp.com",
  projectId: "internet-shop-orgtex",
  storageBucket: "internet-shop-orgtex.appspot.com",
  messagingSenderId: "94105383317",
  appId: "1:94105383317:web:63c370583695bdffb6c69c",
  measurementId: "G-5R7ZKW4WFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {provider};
export const firestore = firebase.firestore();