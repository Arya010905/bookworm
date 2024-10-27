import React from 'react';
import styled from 'styled-components';

const XIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); /* Leave space on the left and right */
  bottom: -180px; /* Position below the card */
  left: -60px; /* Center alignment */
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
  width: 110px; /* Size of the circle */
  height: 110px; /* Size of the circle */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color */
  font-size: 24px; /* Icon size */
  cursor: pointer;

  &.check {
    background-color: #7D6C66; /* Green background for check */
  }

  &.x {
    background-color: #403A3F; /* Red background for X */
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