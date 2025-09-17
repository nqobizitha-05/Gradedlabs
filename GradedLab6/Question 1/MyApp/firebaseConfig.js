import { initializeApp } from "firebase/app";
import { getFirestore } from "@react-native-firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCCGk0W4cx-skCUKRq0AZrz0N1C2BjLql8",
  authDomain: "to-do-list-81174.firebaseapp.com",
  projectId: "to-do-list-81174",
  storageBucket: "to-do-list-81174.firebasestorage.app",
  messagingSenderId: "1022878371955",
  appId: "1:1022878371955:web:79cb301a256c1ee899da06"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);