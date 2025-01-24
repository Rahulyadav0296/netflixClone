// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxvPbUL-lwxDtWx-y4IvOEgxI-2iAwe9A",
  authDomain: "brilliant-auth.firebaseapp.com",
  databaseURL: "https://brilliant-auth-default-rtdb.firebaseio.com",
  projectId: "brilliant-auth",
  storageBucket: "brilliant-auth.firebasestorage.app",
  messagingSenderId: "40124992523",
  appId: "1:40124992523:web:996a04006a9a8cc35e0b0e",
  measurementId: "G-WF6R7MNT8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
