import {initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS-xB_nmhtOsGbfdvfW2cRurFZywkRCCY",
    authDomain: "online-store-app-80125.firebaseapp.com",
    projectId: "online-store-app-80125",
    storageBucket: "online-store-app-80125.appspot.com",
    messagingSenderId: "854888434456",
    appId: "1:854888434456:web:48307bb64d2865efedec6d"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
//google setting
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);