// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "snapandrent.firebaseapp.com",
  projectId: "snapandrent",
  storageBucket: "snapandrent.appspot.com",
  messagingSenderId: "725191994547",
  appId: "1:725191994547:web:39a500da56a1764d0754c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
