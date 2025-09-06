
import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";


 export const authContext=createContext();
 

const App = () => {
  const[authentication,setAuthentication]=useState(false);
 
  return (
    <authContext.Provider value={{authentication,setAuthentication}}>
    <div>
        <h1>Click on the checkbox to get authenticated</h1>
        
        <Auth/>
    </div>
    </authContext.Provider>
  )
}

export default App
