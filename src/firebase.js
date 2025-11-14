// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Replace these placeholders with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyD1t8RAtk17_fh6H3oiwi6bT8KPgS3TYh4",
  authDomain: "shopping-app-39e64.firebaseapp.com",
  projectId: "shopping-app-39e64",
  storageBucket: "shopping-app-39e64.firebasestorage.app",
  messagingSenderId: "933591000112",
  appId: "1:933591000112:web:5b25f9071e5257313679f5",
  measurementId: "G-X59WJMT825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
