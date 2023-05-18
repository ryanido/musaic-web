// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDic3YU6XWfgYkk8rIB0bgeLdRD4dform4",
  authDomain: "musaic-web.firebaseapp.com",
  projectId: "musaic-web",
  storageBucket: "musaic-web.appspot.com",
  messagingSenderId: "362893286332",
  appId: "1:362893286332:web:e72eff5206634934ade9b9",
  measurementId: "G-X2LZT20FTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
