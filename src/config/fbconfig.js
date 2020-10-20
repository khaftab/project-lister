import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8dN5FQk2ccT9YU3t_QmCFU0Ws6EsDjrI",
  authDomain: "net-ninja-part--2.firebaseapp.com",
  databaseURL: "https://net-ninja-part--2.firebaseio.com",
  projectId: "net-ninja-part--2",
  storageBucket: "net-ninja-part--2.appspot.com",
  messagingSenderId: "936853154150",
  appId: "1:936853154150:web:a48fb6aadf17b007e2c0a7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
