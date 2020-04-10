import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyDtTqnpKSfz0L0dH212AUuKaax6DNQh6Tc",
    authDomain: "someone-help-me.firebaseapp.com",
    databaseURL: "https://someone-help-me.firebaseio.com",
    projectId: "someone-help-me",
    storageBucket: "someone-help-me.appspot.com",
    messagingSenderId: "1028867209514",
    appId: "1:1028867209514:web:e60bdda22883ae68aa4653"
};

let firebaseCache;

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }

firebase.initializeApp(config);
firebaseCache = firebase;
return firebase;
};

