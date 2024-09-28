// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD61IOttAtCSyiJ2QsTK6CcIAcZxY60dzI",
  authDomain: "netflixgpt-5b68c.firebaseapp.com",
  projectId: "netflixgpt-5b68c",
  storageBucket: "netflixgpt-5b68c.appspot.com",
  messagingSenderId: "760298179283",
  appId: "1:760298179283:web:1a443e05cba3c11734a226",
  measurementId: "G-C9S8NWK67T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();