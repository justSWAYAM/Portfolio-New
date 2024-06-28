// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwh5xFRnxGXVqPm3AH_B0Tl-ErVvpGAYM",
  authDomain: "portfolio-swayam-e7287.firebaseapp.com",
  projectId: "portfolio-swayam-e7287",
  storageBucket: "portfolio-swayam-e7287.appspot.com",
  messagingSenderId: "98758150481",
  appId: "1:98758150481:web:b87f97f39fe74457136b70",
  databaseURL:"https://portfolio-swayam-e7287-default-rtdb.firebaseio.com"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);