import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const SpotContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SpotHeader = styled.div`
  position: relative;
  height: 50vh;
  margin-bottom: 2rem;
`;

const SpotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const SpotInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpotDescription = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const SpotSidebar = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: fit-content;
`;

const SpotDetail = () => {
  const { id } = useParams();
  
  React.useEffect(() => {
    console.log('Spot ID:', id);
    // Add spot data fetching logic
  }, [id]);

  const spotData = {
    id: 1,
    name: 'Penang Hill',
    image: '/images/penang-hill.jpeg',
    description: `Penang Hill is one of the most popular tourist attractions in Penang, 
    standing at 833 meters above sea level. Visitors can take a funicular train ride up 
    the hill while enjoying beautiful natural scenery. The hilltop features observation 
    decks, restaurants, and various entertainment facilities.`,
    openingHours: '6:30 AM - 11:00 PM',
    ticketPrice: 'RM 30 (Adult) / RM 15 (Child)',
    location: 'Penang Hill, Air Itam, Penang',
    tips: [
      'Best to visit in early morning or late afternoon to avoid midday heat',
      'Bring warm clothing as temperatures are cooler at the top',
      'Weekends are crowded, weekdays recommended'
    ]
  };

  return (
    <SpotContainer>
      <SpotHeader>
        <SpotImage src={spotData.image} alt={spotData.name} />
      </SpotHeader>
      
      <h1>{spotData.name}</h1>
      
      <SpotInfo>
        <SpotDescription>
          <h2>About the Attraction</h2>
          <p>{spotData.description}</p>
        </SpotDescription>
        
        <SpotSidebar>
          <h3>Practical Information</h3>
          <p><strong>Opening Hours:</strong> {spotData.openingHours}</p>
          <p><strong>Admission:</strong> {spotData.ticketPrice}</p>
          <p><strong>Location:</strong> {spotData.location}</p>
          
          <h3>Visitor Tips</h3>
          <ul>
            {spotData.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </SpotSidebar>
      </SpotInfo>
    </SpotContainer>
  );
};

export default SpotDetail; 