import firebase from "firebase";
import "firebase/auth";
import { createProfil } from "../components/profils/ProfilsFirestoreService";

const firebaseConfig = {
  apiKey: "AIzaSyAO8Qgo3vVUhD0-gTK7jfRJKEovEf4sARA",
  authDomain: "game-29b2d.firebaseapp.com",
  projectId: "game-29b2d",
  storageBucket: "game-29b2d.appspot.com",
  messagingSenderId: "363067840999",
  appId: "1:363067840999:web:6eb789f4680dc1cada4542"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(res => {
      createProfil(res);
      //console.log(res)
    })
    .catch(error => {
      console.log(error.message);
    });
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
  auth
    .signInWithPopup(facebookProvider)
    .then(res => {
      createProfil(res);
      console.log(res);
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch(error => {
      console.log(error.message);
    });
};
