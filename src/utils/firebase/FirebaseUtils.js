import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCim8EYW1tP5oqV-abZ9uh1spESCmHYpU4",
  authDomain: "crwn-clothing-db-a9da3.firebaseapp.com",
  projectId: "crwn-clothing-db-a9da3",
  storageBucket: "crwn-clothing-db-a9da3.appspot.com",
  messagingSenderId: "189525742396",
  appId: "1:189525742396:web:abd873b5a72ff232974439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid );

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    } catch(err) {
      console.log(err.message);
    }
  }

  return userDocRef;
}