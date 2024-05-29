import { createContext,useContext } from "react";
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set,onValue} from 'firebase/database'
import { useState } from "react";
import { useEffect } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBH5_WccNr69viOUe7dPYDU0M7fwyhV7F4",
  authDomain: "fir-contact-app-367b6.firebaseapp.com",
  projectId: "fir-contact-app-367b6",
  storageBucket: "fir-contact-app-367b6.appspot.com",
  messagingSenderId: "535108034061",
  appId: "1:535108034061:web:b8f96a821bdb3b6bde7f44",
  databaseURL:"https://fir-contact-app-367b6-default-rtdb.firebaseio.com"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app)
const putdata=(val,namedata,emaildata)=>{
    set(ref(database,'contacts/'+val+'/userid'),{
        name:namedata,
        email:emaildata
    })
}


  


const FirebaseInstance=createContext(null)
export const useFirebase=()=>useContext(FirebaseInstance)
const Context = (props) => {
    
    return (
        <FirebaseInstance.Provider value={{putdata,database}}>
            {props.children}
        </FirebaseInstance.Provider>
            
       
    );
};

export default Context;