import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARaPrvISM4PS87J2sHx3O13ubtXKz0zGQ",
  authDomain: "bancosantander-d2c66.firebaseapp.com",
  databaseURL: "https://bancosantander-d2c66.firebaseio.com",
  projectId: "bancosantander-d2c66",
  storageBucket: "bancosantander-d2c66.appspot.com",
  messagingSenderId: "916166846557",
  appId: "1:916166846557:web:b1a930aae2b7390af9c5b4"
};

export const fire = firebase.initializeApp(firebaseConfig);
const baseDb = fire.database();
export const storage = fire.storage();
export const db = baseDb;