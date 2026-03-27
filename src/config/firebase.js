// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrx5qIU33bxPjw9ogZg9mNeM39ZXiVLg8",
  authDomain: "pickbazar-app-b2b46.firebaseapp.com",
  projectId: "pickbazar-app-b2b46",
  storageBucket: "pickbazar-app-b2b46.firebasestorage.app",
  messagingSenderId: "446112112044",
  appId: "1:446112112044:web:8173acfbd67385d9dd2e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };