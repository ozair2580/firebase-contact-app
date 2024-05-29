import { useFirebase } from "../Context/Context";
import { useRef } from "react";
import { useState } from "react";
import { FirebaseForm } from "./AddContact";
const Update = ({sethideupdateform,resdata,Idval,id}) => {
    const firebase=useFirebase();
    const [cnt,setcnt]=useState(id)
    
    const name=useRef()
    const email=useRef()
   const handlesubmit=(e)=>{
     e.preventDefault();
     let namedata=name.current.value;
     let emaildata=email.current.value;
     firebase.putdata(cnt,namedata,emaildata)
     
     sethideupdateform(false)

   }
    return (
        <FirebaseForm action="">
        
        <div className="inputdiv">
          <label htmlFor="name">Name</label>
          <input  ref={name} type="text" name="name" />
        </div>
        <div className="inputdiv">
          <label htmlFor="Email">Email</label>
          <input  ref={email} type="text" name="Email"/>
        </div>

        <div className="Addbutton">
           <button onClick={handlesubmit}>Update form</button>
        </div>

      </FirebaseForm>
    );
};

export default Update;