import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC2EmyKqhIbBY7PRUuwuEUUTkkrLG4FLaE",
    authDomain: "eglein-16e44.firebaseapp.com",
    databaseURL: "https://eglein-16e44.firebaseio.com",
    projectId: "eglein-16e44",
    storageBucket: "eglein-16e44.appspot.com",
    messagingSenderId: "223442958425",
    appId: "1:223442958425:web:381b9105f701318f0f9948",
    measurementId: "G-1JDJ7R7C6Y"
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };