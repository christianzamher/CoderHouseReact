// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDBwA_v8vpd-7fuMufy_-z8dHAFFgTtgs",
  authDomain: "proyecto-react-5b72b.firebaseapp.com",
  projectId: "proyecto-react-5b72b",
  storageBucket: "proyecto-react-5b72b.appspot.com",
  messagingSenderId: "247277207799",
  appId: "1:247277207799:web:7cbc85dfff379a0d46d3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);