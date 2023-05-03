// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKWwqvsq4N27dX4wl3iGHHIGI2i_6J5dI",
  authDomain: "the-news-dragon-a495c.firebaseapp.com",
  projectId: "the-news-dragon-a495c",
  storageBucket: "the-news-dragon-a495c.appspot.com",
  messagingSenderId: "1029942617867",
  appId: "1:1029942617867:web:c531aa8ef80c33c0e2a40e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;