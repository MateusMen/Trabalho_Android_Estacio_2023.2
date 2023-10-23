import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIpjYK4eR_t-fRmMnDsZt1TTtVmozmyJI",
  authDomain: "quiz-app-estacio.firebaseapp.com",
  projectId: "quiz-app-estacio",
  storageBucket: "quiz-app-estacio.appspot.com",
  messagingSenderId: "825688841307",
  appId: "1:825688841307:web:f52282ba484e0cbb9ef37e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);