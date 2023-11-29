import { createContext, useEffect, useState } from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.utils';
// this is the actual value that i wanto to access
export const UserContext=createContext({
  currentUser:null,
  setCurrentUser:()=>null
});

export const UserProvider = ({children})=>{

    const [currentUser,setCurrentUser]=useState(null);//here initialize the value with null
    const value={currentUser,setCurrentUser};//generate the value that I'm going to pass to value on UserContext.Provider.

    useEffect(()=>{//Pattern instantiate some function, but give it a empty dependency array,
                  // meaning that I only want to run this function once when the component mounts.
                 
                 const unsubscribe= onAuthStateChangedListener((user)=>{
                  if(user){
                    createUserDocumentFromAuth(user)
                  }
                 console.log(user);
                 setCurrentUser(user);
                 });
                 return unsubscribe;
    },[]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
