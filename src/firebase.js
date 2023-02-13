import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyA-pK05n22es6m9y7QZkMQbfYCOOYU2yUU",
  authDomain: "chat-app-b0bdf.firebaseapp.com",
  projectId: "chat-app-b0bdf",
  storageBucket: "chat-app-b0bdf.appspot.com",
  messagingSenderId: "512996289158",
  appId: "1:512996289158:web:2b561f58761ba39dff3f07",
  databaseURL: "https://DATABASE_NAME.europe-west1.firebasedatabase.app",
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)
export const db = getFirestore(app)