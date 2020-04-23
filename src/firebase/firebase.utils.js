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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    } , {})
  };
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;