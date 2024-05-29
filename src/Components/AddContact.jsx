import styled from "styled-components";
import { useFirebase } from "../Context/Context";
import { useRef } from "react";
import { useState } from "react";

const AddContact = ({ hideupdateform,sethide,sethideupdateform,resdata}) => {
    const firebase=useFirebase();
    const [cnt,setcnt]=useState(resdata&&resdata.length>0 ? resdata.length: 1)
    
    const name=useRef()
    const email=useRef()
   const handlesubmit=(e)=>{
     e.preventDefault();
        setcnt(cnt+1)
     let namedata=name.current.value;
     let emaildata=email.current.value;
     firebase.putdata(cnt,namedata,emaildata)
     sethide(false)
     sethideupdateform(false)

   }
// console.log(resdata.length)
   
  
    return (
        <FirebaseForm action="">
        <div className="inputdiv">
          <label htmlFor="name">Name</label>
          <input ref={name} type="text" name="name" />
        </div>
        <div className="inputdiv">
          <label htmlFor="Email">Email</label>
          <input ref={email} type="text" name="Email"/>
        </div>

        <div className="Addbutton">
           <button onClick={handlesubmit}>{hideupdateform===true?"update":"Add Contact"}</button>
        </div>

      </FirebaseForm>
    );
};

export default AddContact;

export const FirebaseForm=styled.form`
display: flex;
flex-direction: column;
border-radius: 8px;
gap: 20px;
padding: 16px;
background-color: #FDFDFD;
position: absolute;
margin: 37px 5px;
  width: 348px;
  height: 244px;
  
  .inputdiv{
    display: flex;
    flex-direction: column;
    gap: 8px;
   width: 316px;
   height: 67px;

   label{
    font-size: 16px;
    font-weight: 600;
    font-family: poppins;
   }
   input{
    width: 316px;
    height: 40px;
    box-shadow: 0.5px 0.5px inset black;
    padding: 5px 10px;
   }
  }

  .Addbutton{
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 31px;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 100%;
      background-color: #FCCA3F;
      box-shadow: 0.5px 0.5px inset black;
      border-radius: 5px;
    }
  }
`