// Import the functions you need from the SDKs you need
import { getApp,initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAIpjYK4eR_t-fRmMnDsZt1TTtVmozmyJI",

  authDomain: "quiz-app-estacio.firebaseapp.com",

  databaseURL: "https://quiz-app-estacio-default-rtdb.firebaseio.com",

  projectId: "quiz-app-estacio",

  storageBucket: "quiz-app-estacio.appspot.com",

  messagingSenderId: "825688841307",

  appId: "1:825688841307:web:f52282ba484e0cbb9ef37e"

};


// Initialize Firebase
const createFirebaseApp = (config ={}) => {
  try {
    return getApp()
  }catch (error) {
    return initializeApp(config)
  }
}

const app = createFirebaseApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);