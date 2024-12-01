// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXOT4NGW0zIyICM7yZxomkQmzFVmxnrl0",
  authDomain: "coffee-store-89180.firebaseapp.com",
  projectId: "coffee-store-89180",
  storageBucket: "coffee-store-89180.firebasestorage.app",
  messagingSenderId: "670722127090",
  appId: "1:670722127090:web:649b71f92e0b356c0e8c6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
