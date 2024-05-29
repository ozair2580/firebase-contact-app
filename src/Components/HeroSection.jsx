import React from 'react';
import styled from "styled-components";

const HeroSection = (props) => {
    return (
        <HeroContainer className="hero">
            {props.children}
            </HeroContainer>
    );
};

export default HeroSection;

const HeroContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 360px;
  height: 739px;
  overflow: scroll;
  overflow-x: hidden;
  position: relative;

`;
