import { createContext, useState } from "react";
// this is the actual value that i wanto to access
export const UserContext=createContext({
  currentUser:null,
  setCurrentUser:()=>null
});

export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(null);//here initialize the value with null
    const value={currentUser,setCurrentUser};//generate the value that I'm going to pass to value on UserContext.Provider.
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
