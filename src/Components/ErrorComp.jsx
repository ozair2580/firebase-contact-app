import React from 'react';
import styled from "styled-components";

const ErrorComp = () => {
    return (
        <ShowError>
          <img src="/Hands Contact.png" alt="" />
        
            <h1>Data not found</h1>
          
         </ShowError>
    );
};

export default ErrorComp;
const ShowError=styled.div`
display: flex;
margin: 250px 0px 57px 57px;
align-items: center;
gap: 16px;
width: 280px;
height: 72px;
img{
  width: 54px;
  height: 72px;
}
h1{
  font-size: 24px;
  font-weight: 800;
  font-family: poppins;
  color: white;

}
`

