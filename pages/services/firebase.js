import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
    apiKey: "AIzaSyBFA-c8bTNg5lclwXFDKJoov7DExB1L0W0",
    authDomain: "crud-93fe2.firebaseapp.com",
    databaseURL: "https://crud-93fe2-default-rtdb.firebaseio.com",
    projectId: "crud-93fe2",
    storageBucket: "crud-93fe2.appspot.com",
    messagingSenderId: "672888549593",
    appId: "1:672888549593:web:0efcf95cc0896c42e0cec8"
    })
  : firebase.app();