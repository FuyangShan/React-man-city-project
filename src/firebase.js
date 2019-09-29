import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACbT_9PC6JSSSK_b4ltuS-nzO9_NgKefg",
    authDomain: "man-city-project.firebaseapp.com",
    databaseURL: "https://man-city-project.firebaseio.com",
    projectId: "man-city-project",
    storageBucket: "man-city-project.appspot.com",
    messagingSenderId: "51182505636",
    appId: "1:51182505636:web:17ded455bc8777cdeee031",
    measurementId: "G-KRK4FHLG9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//build variable from database
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
};

// firebaseDB.ref('matches').once('value').then((snapshot)=>{
// console.log(snapshot.val())

// })
