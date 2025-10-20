// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCLQPcruEtlWtrxBBygNklV77Iq3gP44",
  authDomain: "fir-figthter.firebaseapp.com",
  projectId: "fir-figthter",
  storageBucket: "fir-figthter.firebasestorage.app",
  messagingSenderId: "735539847967",
  appId: "1:735539847967:web:c22b9b9f88bf9f5ce8062a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
