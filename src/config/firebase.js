// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-v2iePhfZMLg0CugXJ3iL0Jbza0OvQA",
  authDomain: "mb-project-2aa93.firebaseapp.com",
  projectId: "mb-project-2aa93",
  storageBucket: "mb-project-2aa93.appspot.com",
  messagingSenderId: "468038212398",
  appId: "1:468038212398:web:570ee9172e1aa5d46ff8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()