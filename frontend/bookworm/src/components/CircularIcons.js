import React from 'react';
import styled from 'styled-components';

const XIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); /* Leave space on the left and right */
  bottom: -90px; /* Position below the card */
  left: -78px; /* Center alignment */
`;

const CheckIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px); /* Leave space on the left and right */
  bottom: -90px; /* Position below the card */
  left: 204px; /* Center alignment */
`;

const Icon = styled.div`
  width: 90px; /* Size of the circle */
  height: 90px; /* Size of the circle */
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

const CircularIcons = () => {
  return (
    <>
    <XIconContainer>
      <Icon className="x">✖</Icon>
    </XIconContainer>
    <CheckIconContainer>
        <Icon className="check">✔</Icon>
    </CheckIconContainer>
    </>
  );
};

export default CircularIcons;