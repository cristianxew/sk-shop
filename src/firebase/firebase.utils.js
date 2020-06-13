import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDG362HAQI2SDR-t8YHUYcglTydFT6R1D8",
  authDomain: "ecommerce-project-cddb1.firebaseapp.com",
  databaseURL: "https://ecommerce-project-cddb1.firebaseio.com",
  projectId: "ecommerce-project-cddb1",
  storageBucket: "ecommerce-project-cddb1.appspot.com",
  messagingSenderId: "985863026953",
  appId: "1:985863026953:web:cd484acd7f1ac911bf7bd8",
  measurementId: "G-6QVE5SG5HJ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
