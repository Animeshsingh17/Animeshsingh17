import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADvKUoaefqP5DoM9p96V04iRBGqv4ln_4",
  authDomain: "notes-21f43.firebaseapp.com",
  databaseURL: "https://notes-21f43-default-rtdb.firebaseio.com",
  projectId: "notes-21f43",
  storageBucket: "notes-21f43.appspot.com",
  messagingSenderId: "759543184712",
  appId: "1:759543184712:web:027798ce20f92e1fa2c77d",
};
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
export default database;
