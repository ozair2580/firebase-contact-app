import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { TbEditCircle } from 'react-icons/tb';
import styled from "styled-components";

const Contact = ({email,name,handleEditicon,handledelete,i}) => {
    return (
        <ContactList >
        <div className="ContactDetail">
          <FaRegCircleUser className="userIcon" />
          <div className="ContactName">
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        </div>

        <div className="ContactEdit">
          <TbEditCircle className="EditIcon" onClick={()=>handleEditicon(i)}/>
          <MdDelete className="DeleteIcon" onClick={()=>handledelete(i)} />
        </div>
      </ContactList>
    );
};

export default Contact;


const ContactList = styled.div`
  display: flex;
  width: 360px;
  height: 64px;
  align-items: center;
  padding: 8px 4px;
  border-radius: 10px;
  gap: 40px;
  background-color: #ffeaae;
  .ContactDetail {
    display: flex;
    gap: 6px;
    align-items: center;
    width: 238px;
    height: 48px;

    .userIcon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      color: #f6820c;
      background-color: transparent;
    }
    .ContactName {
      display: flex;
      flex-direction: column;
      width: 184px;
      height: 36px;
      color: black;

      h1 {
        font-size: 16px;
        font-weight: 700;
        font-family: poppins;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        font-family: poppins;
      }
    }
  }

  .ContactEdit {
    display: flex;
    gap: 8px;
    width: 72px;
    height: 32px;
    .EditIcon {
      width: 32px;
      height: 32px;
      color: black;
      background-color: transparent;
      cursor: pointer;
      
    }
    .EditIcon:hover{
      width: 55px;
      border-radius: 50%;
    }
    .DeleteIcon {
      width: 32px;
      height: 32px;
      color: purple;
      cursor: pointer;
      background-color: transparent;
    }
    .DeleteIcon:hover{
      width: 55px;
      border-radius: 50%;
    }
    
  }
`;

