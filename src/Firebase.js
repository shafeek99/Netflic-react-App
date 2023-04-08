// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_GRreoKGbpnTKp5aiUmDXWUfi5ac20fQ",
  authDomain: "react--netflix--app.firebaseapp.com",
  projectId: "react--netflix--app",
  storageBucket: "react--netflix--app.appspot.com",
  messagingSenderId: "869872493706",
  appId: "1:869872493706:web:93b19eb84a3b9074397973",
  measurementId: "G-6XQSB5X16D"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)