import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBS-xB_nmhtOsGbfdvfW2cRurFZywkRCCY",
    authDomain: "online-store-app-80125.firebaseapp.com",
    projectId: "online-store-app-80125",
    storageBucket: "online-store-app-80125.appspot.com",
    messagingSenderId: "854888434456",
    appId: "1:854888434456:web:48307bb64d2865efedec6d"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);/*This generate the next bug Cross-Origin-Opener-Policy policy would block the window.closed call. */
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth)return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email|| !password)return;
  return await createAuthUserWithEmailAndPassword(auth,email,password)

}