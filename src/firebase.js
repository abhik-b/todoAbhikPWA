import * as firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyA39Sa7ufG1ATqSRgDGcsPi0aimb7UujLQ",
  authDomain: "todopwa-b23f0.firebaseapp.com",
  databaseURL: "https://todopwa-b23f0.firebaseio.com",
  projectId: "todopwa-b23f0",
  storageBucket: "todopwa-b23f0.appspot.com",
  messagingSenderId: "928397831977",
  appId: "1:928397831977:web:f120172f486827935b9138",
  measurementId: "G-CVPSTXXW3L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var db = firebase.firestore();
db.enablePersistence();
export default db;
