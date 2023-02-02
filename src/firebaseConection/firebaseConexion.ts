// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN9a_a-TCxX0ZUw3VclQkA49vHUktlZ2k",
  authDomain: "profinal-e40c6.firebaseapp.com",
  projectId: "profinal-e40c6",
  storageBucket: "profinal-e40c6.appspot.com",
  messagingSenderId: "304355718479",
  appId: "1:304355718479:web:2370ba5f223b1ac8b2013a",
  measurementId: "G-0ZHDMXD6L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//llamadno el metodo getFirestore

const db = getFirestore(app);
export default db;