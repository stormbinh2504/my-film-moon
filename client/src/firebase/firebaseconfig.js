// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfkrWm5SFzeN9hAMiCdoB0tVKqRlexgvA",
  authDomain: "cokhithvietnam-59f83.firebaseapp.com",
  databaseURL: "https://cokhithvietnam-59f83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cokhithvietnam-59f83",
  storageBucket: "cokhithvietnam-59f83.appspot.com",
  messagingSenderId: "90828202628",
  appId: "1:90828202628:web:8ec9cc0dd3de3b94f9d8d1",
  measurementId: "G-NF8PEPGXYB"
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    // signInSuccessWithAuthResult: () => false,
  },
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
const storage = getStorage(appFirebase);
const auth = getAuth(appFirebase);
// const dbFirestore = getFirestore(appFirebase)
const dbFirestore = "aaaa"
const dbRealtime = getDatabase(appFirebase)
export { dbFirestore, dbRealtime, uiConfig, storage, appFirebase, auth };