import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACbT_9PC6JSSSK_b4ltuS-nzO9_NgKefg",
  authDomain: "man-city-project.firebaseapp.com",
  databaseURL: "https://man-city-project.firebaseio.com",
  projectId: "man-city-project",
  storageBucket: "",
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
export { firebase, firebaseMatches };

// firebaseDB.ref('matches').once('value').then((snapshot)=>{
// console.log(snapshot.val())

// })
