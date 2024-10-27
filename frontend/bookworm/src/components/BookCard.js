import React, { useState } from 'react';
import styled from 'styled-components';
import CircularIcons from './CircularIcons';

const CardContainer = styled.div`
  position: absolute; /* Change to absolute to position it relative to the nearest positioned ancestor */
  top: 110px; /* Adjust as needed */
  left: 530px; /* Adjust as needed */
  width: 400px; /* Set desired width */
  height: 500px; /* Set desired height */
  perspective: 1000px; /* Enable 3D perspective */
  margin: 20px; /* Add margin to space out cards */
  color: #006494;
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

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

const CardFront = styled(CardSide)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #006494;;
    padding: 15px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CoverImage = styled.img`
    width: 100%; /* Make the image take the full width */
    height: 100%; /* Make the image take the full height */
    object-fit: contain; /* Ensure the image covers the entire area without distortion */
`;

const CardBack = styled(CardSide)`
  background-color: #e7f3fe;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  transform: rotateY(180deg);
  
`;

const Title = styled.h3`
  position: absolute;
  top: 415px;
  left: 10px;
  margin: 0;
  font-size: 2.0em;
`;

const Author = styled.p`
  position: absolute;
  top: 300px;
  left: 10px;
  margin: 0;
  font-size: 1.7em;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
`;

const TitleAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the text */
  justify-content: center; /* Center vertically */
  height: 90px; /* Set a specific height */
  width: 408px;
  background-color: rgba(0, 100, 148, 1); /* Optional background for readability */
  color: white; /* Text color */
  border-radius: 10px 10px 0 0; /* Round top corners */
  padding: 5px 10px; /* Adjust padding for aesthetics */
  text-align: center; /* Center the text */
`;

const BookCard = ({ cover, title, author, summary, onSwitch }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleCircClick = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the card
    if (onSwitch && typeof onSwitch === 'function') {
      onSwitch(); // Call to switch to the next book
    } else {
      console.error('onSwitch is not a function');
    }
  };

  return (
    
    <CardContainer onClick={handleClick}>
      <Card flipped={flipped}>
      <TitleAuthorContainer>
        <h3>{title}</h3>
        <p>{author}</p>
      </TitleAuthorContainer>
        <CardFront cover={cover}>
          {/* <Title>{title}</Title>
          <Author>{author}</Author> */}
          <CoverImage src={cover} alt={title} />
        </CardFront>
        <CardBack>
          <p>{summary}</p>
        </CardBack>
      </Card>
      <IconsContainer>
        <CircularIcons onCircleClick={handleCircClick} />
      </IconsContainer>
    </CardContainer>
  );
};

export default BookCard;
