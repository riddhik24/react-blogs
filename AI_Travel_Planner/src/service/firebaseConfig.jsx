// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD0GHOoYGEwEPyp79d7_Z139Ys7C0lL2A4",
  authDomain: "causal-jigsaw-451016-d8.firebaseapp.com",
  projectId: "causal-jigsaw-451016-d8",
  storageBucket: "causal-jigsaw-451016-d8.firebasestorage.app",
  messagingSenderId: "407601408515",
  appId: "1:407601408515:web:84de437dc0642aea2cfc36",
  measurementId: "G-VC2ZX2M5E8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);