// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSkYcb-vqtD68lnGVQbln_uwrt0OR7LBk",
    authDomain: "auro01.firebaseapp.com",
    databaseURL: "https://auro01.firebaseio.com",
    projectId: "auro01",
    storageBucket: "auro01.firebasestorage.app",
    messagingSenderId: "879864251413",
    appId: "1:879864251413:web:d73f5747c361a1a03e7a1c",
    measurementId: "G-LCSD9NR4JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);