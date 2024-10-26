import React from 'react';
import styled from 'styled-components';

const XIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); /* Leave space on the left and right */
  bottom: -180px; /* Position below the card */
  left: -100px; /* Center alignment */
`;

const CheckIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); /* Leave space on the left and right */
  bottom: -180px; /* Position below the card */
  left: 380px; /* Center alignment */
`;

const Icon = styled.div`
  width: 140px; /* Size of the circle */
  height: 140px; /* Size of the circle */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color */
  font-size: 24px; /* Icon size */
  cursor: pointer;

  &.check {
    background-color: green; /* Green background for check */
  }

  &.x {
    background-color: red; /* Red background for X */
  }
`;

const CircularIcons = ({ onCircleClick }) => {
    return (
      <>
        <XIconContainer>
          <Icon className="x" onClick={onCircleClick}>✖</Icon>
        </XIconContainer>
        <CheckIconContainer>
          <Icon className="check" onClick={onCircleClick}>✔</Icon>
        </CheckIconContainer>
      </>
    );
  };
  
  export default CircularIcons;