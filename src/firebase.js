// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCgch_AqH3ZHyemCNCTf6rQEv54J7Tfy8",
  authDomain: "clone-2c65a.firebaseapp.com",
  projectId: "clone-2c65a",
  storageBucket: "clone-2c65a.appspot.com",
  messagingSenderId: "559293613033",
  appId: "1:559293613033:web:ded9b4f3b458055c188178",
  measurementId: "G-YY900F4GBY",
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const logout = () => {
  signOut(auth);
};
const registerWithEmailAndPassword = async (email, password) => {
  let res;
  try {
    res = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  return res;
};

const logInWithEmailAndPassword = async (email, password) => {
  let res;
  try {
    res = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export {
  db,
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout
};
