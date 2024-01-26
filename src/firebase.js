import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDTCNXN1akZ6DEWKLGyOp2JZvAworux9jI",
    authDomain: "scu-acm.firebaseapp.com",
    projectId: "scu-acm",
    storageBucket: "scu-acm.appspot.com",
    messagingSenderId: "561382074280",
    appId: "1:561382074280:web:e3e8ca43e1a5270b519f9d",
    measurementId: "G-9ELQ4BE3XH"
  };

firebase.initializeApp(firebaseConfig);

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions();

if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  auth.useEmulator("http://localhost:9099");
  functions.useEmulator("localhost",5001);
  storage.useEmulator("localhost",9199)
}

db.enablePersistence();