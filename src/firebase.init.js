import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ53fzqdKblg5xYB4PbYOZj7GoSqqWCO4",
  authDomain: "car-parts-manufacture-13c8f.firebaseapp.com",
  projectId: "car-parts-manufacture-13c8f",
  storageBucket: "car-parts-manufacture-13c8f.appspot.com",
  messagingSenderId: "541294136678",
  appId: "1:541294136678:web:90aa063f685f4ba3f14ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;