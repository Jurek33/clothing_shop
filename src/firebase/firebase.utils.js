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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAd = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAd,
          ...additionalData
        })
      } catch(err) {
        console.log('error creating user', err.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;