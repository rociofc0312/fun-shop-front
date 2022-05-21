import firebase from 'firebase/app'
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCk9XdxQJFB4IMV-WJO1OBZ2ggE66ULoEo",
    authDomain: "my-shop-8d332.firebaseapp.com",
    projectId: "my-shop-8d332",
    storageBucket: "my-shop-8d332.appspot.com",
    messagingSenderId: "377475907149",
    appId: "1:377475907149:web:3324c677b0aafcde852604",
    measurementId: "G-682PC3HS70"
  }
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const fireStore = firebase.firestore(app)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { app, fireStore, timestamp }