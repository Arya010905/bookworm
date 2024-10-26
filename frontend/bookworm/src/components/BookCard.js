import React, { useState } from 'react';
import styled from 'styled-components';
import CircularIcons from './CircularIcons';

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  background-image: url(${props => props.cover});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${props => props.cover});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transform: rotateY(180deg); /* Rotate back side */
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em; /* Adjust font size */
`;

const Author = styled.p`
  margin: 0;
  font-size: 1em; /* Adjust font size */
`;

const IconsContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px; /* Adjust to position above the card */
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* Add some padding to center the icons */
  z-index: 10; /* Ensure icons are above the card */
`;

const BookCard = ({ cover, title, author, summary }) => {
    const [flipped, setFlipped] = useState(false);
  
    const handleClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <CardContainer onClick={handleClick}>
        <Card flipped={flipped}>
          <CardFront cover={cover}>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </CardFront>
          <CardBack>
            <p>{summary}</p>
          </CardBack>
        </Card>
        <IconsContainer>
          <CircularIcons />
        </IconsContainer>
      </CardContainer>
  );
};

export default BookCard;
