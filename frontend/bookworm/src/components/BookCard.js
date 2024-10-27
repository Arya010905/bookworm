// BookCard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CircularIcons from './CircularIcons';

const CardContainer = styled.div`
  position: absolute; /* Change to absolute to position it relative to the nearest positioned ancestor */
  top: 80px; /* Adjust as needed */
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
  background-color: #E6E1DE;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #E6E1DE;
  padding: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CoverImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: contain; 
`;

const CardBack = styled(CardSide)`
  background-color: #E6E1DE;
  color: #5e5352;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  transform: rotateY(180deg);
  
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
  align-items: center; 
  justify-content: center; 
  height: 90px; 
  width: 406px;
  background-color: rgba(155, 133, 121, 1); 
  color: rgba(33, 33, 43, 1); 
  border-radius: 10px 10px 10px 10px; 
  padding: 5px 10px; 
  text-align: center; 
`;

const Title = styled.h3`
  margin: 0; /* Reset margin */
  padding: 5px; /* Add some padding if needed */
  position: absolute; /* Absolute positioning */
  top: 20px; /* Adjust as needed */
  font-size: 1.7em;
  /* Additional styling to change position */
`;

const Author = styled.p`
  margin-top: 10px; /* Add margin to space from title */
  margin-bottom: 0; /* Reset bottom margin */
  padding: 0; /* Reset padding */
  position: absolute; /* Absolute positioning */
  top: 55px; /* Adjust as needed */
  font-size: 1.3em;
  /* Additional styling to change position */
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

  // Handle author display
  const displayAuthors = Array.isArray(author) ? author.join(', ') : author;

  return (
    <CardContainer onClick={handleClick}>
      <Card flipped={flipped}>
        <TitleAuthorContainer>
          <Title>{title}</Title>
          <Author>{displayAuthors}</Author> {/* Display the authors */}
        </TitleAuthorContainer>
        <CardFront cover={cover}>
          <CoverImage src={cover} alt={title} />
        </CardFront>
        <CardBack>
          <h3>{summary}</h3>
        </CardBack>
      </Card>
      <IconsContainer>
      <CircularIcons onCircleClick={handleCircClick} />
      </IconsContainer>
    </CardContainer>
  );
};

export default BookCard;