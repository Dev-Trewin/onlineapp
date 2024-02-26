import { createContext, useEffect, useState, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
// this is the actual value that i wanto to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
//create reducer function
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  // const [currentUser,setCurrentUser]=useState(null);//here initialize the value with null
  const [{currentUser},dispatch] = useReducer(useReducer, INITIAL_STATE);
  
  const setCurrentUser=(user)=>{
   dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER,payload:user})

  }
  const value = { currentUser, setCurrentUser }; //generate the value that I'm going to pass to value on UserContext.Provider.

  useEffect(() => {
    //Pattern instantiate some function, but give it a empty dependency array,
    // meaning that I only want to run this function once when the component mounts.

    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
