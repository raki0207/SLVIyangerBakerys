// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your Firebase project configuration
// You can find these values in your Firebase Console:
// 1. Go to https://console.firebase.google.com/
// 2. Select your project (or create a new one)
// 3. Go to Project Settings > General
// 4. Scroll down to "Your apps" section
// 5. Click on the web app icon (</>)
// 6. Copy the firebaseConfig object

const firebaseConfig = {
    apiKey: "AIzaSyAWGxXUOj4E1xmuDOg6I7pd0xBzulSYhp0",
    authDomain: "book-my-camera.firebaseapp.com",
    projectId: "book-my-camera",
    storageBucket: "book-my-camera.firebasestorage.app",
    messagingSenderId: "923768155103",
    appId: "1:923768155103:web:cf2eacc81000ea7b36326a",
    measurementId: "G-WPGSSX0N70"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
