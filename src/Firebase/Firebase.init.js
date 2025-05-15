import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjFC7dCqQ6I0XcH6bQMmwrtcZqomJvHJM",
  authDomain: "coffee-house-auth-b00d4.firebaseapp.com",
  projectId: "coffee-house-auth-b00d4",
  storageBucket: "coffee-house-auth-b00d4.firebasestorage.app",
  messagingSenderId: "136735109856",
  appId: "1:136735109856:web:35c437722597b63b9cd685",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
