import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC7qBWFMKo9MHTKqQJqf_crDOsH9STqeCA",
  authDomain: "shopez-6895a.firebaseapp.com",
  projectId: "shopez-6895a",
  storageBucket: "shopez-6895a.firebasestorage.app",
  messagingSenderId: "246805896349",
  appId: "1:246805896349:web:5ae869350418c6c839c874"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };