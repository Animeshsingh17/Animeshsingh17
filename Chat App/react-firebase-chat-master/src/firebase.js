// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzHcdrG94AjDTsIGZJIz1DvFC5ltqBLs0",
  authDomain: "mychatproject-de400.firebaseapp.com",
  projectId: "mychatproject-de400",
  storageBucket: "mychatproject-de400.appspot.com",
  messagingSenderId: "1050079867657",
  appId: "1:1050079867657:web:a385ce37564bb0ece099d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
