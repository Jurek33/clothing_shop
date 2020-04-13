import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbrVfRk-Nfml0CACpQUPf0WYjCvL4q1g8",
    authDomain: "clothes-db-f402b.firebaseapp.com",
    databaseURL: "https://clothes-db-f402b.firebaseio.com",
    projectId: "clothes-db-f402b",
    storageBucket: "clothes-db-f402b.appspot.com",
    messagingSenderId: "245097335721",
    appId: "1:245097335721:web:dd12fb867d751c065952b8",
    measurementId: "G-N6BXED950Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;