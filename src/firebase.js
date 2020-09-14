import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuuEZG_KoexBif_nhptzompGX-U2ITs7w",
  authDomain: "clone-714ce.firebaseapp.com",
  databaseURL: "https://clone-714ce.firebaseio.com",
  projectId: "clone-714ce",
  storageBucket: "clone-714ce.appspot.com",
  messagingSenderId: "225848805499",
  appId: "1:225848805499:web:71e5cf72c445dfcfd83ade",
  measurementId: "G-8J1R9L3REJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
