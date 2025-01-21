// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyixlL-sRmwIicO7AjUdLIwJMlDstHDbI",
  authDomain: "brilliant-auth.firebaseapp.com",
  databaseURL: "https://brilliant-auth-default-rtdb.firebaseio.com",
  projectId: "brilliant-auth",
  storageBucket: "brilliant-auth.firebasestorage.app",
  messagingSenderId: "40124992523",
  appId: "1:40124992523:web:56558e31fbb5348d5e0b0e",
  measurementId: "G-RJ5LFJEC32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
