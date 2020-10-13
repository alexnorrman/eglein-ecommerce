import firebase from "firebase";

/* Add config! */
const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };
