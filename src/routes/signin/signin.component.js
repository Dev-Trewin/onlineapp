import { signInWithGooglePopup,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import{ createUserDocumentFromAuth,auth} from  "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const Signin=()=>{

    useEffect(() => {
        const getResponse = async () => {
          const response = await getRedirectResult(auth);
     
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        };
     
        getResponse().catch(console.error);
      }, []);

        const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user);
    }
 
    return(
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    );

};

export default Signin;