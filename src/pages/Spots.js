import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SpotsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/penang-overview.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
`;

const SpotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SpotCard = styled(Link)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SpotImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const SpotInfo = styled.div`
  padding: 1.5rem;
`;

const SpotMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: ${props => props.active ? '#f0a500' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.active ? '#d89400' : '#e5e5e5'};
  }
`;

const Spots = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Spots' },
    { id: 'historical', name: 'Historical' },
    { id: 'nature', name: 'Nature' },
    { id: 'religious', name: 'Religious' },
    { id: 'art', name: 'Art & Culture' }
  ];

  const spots = [
    {
      id: 1,
      name: 'Penang Hill',
      image: '/images/penang-hill.jpeg',
      description: 'The highest point in Penang with panoramic city views',
      category: 'nature',
      visitTime: '2-3 hours',
      price: 'RM 30'
    },
    {
      id: 2,
      name: 'Kek Lok Si Temple',
      image: '/images/kek-lok-si.jpg',
      description: 'Largest Buddhist temple in Southeast Asia',
      category: 'religious',
      visitTime: '1-2 hours',
      price: 'Free'
    },
    {
      id: 3,
      name: 'Clan Jetties',
      image: '/images/clan-jetties.jpg',
      description: 'Historic waterfront settlement with traditional houses on stilts',
      category: 'historical',
      visitTime: '1 hour',
      price: 'Free'
    },
    {
      id: 4,
      name: 'Street Art',
      image: '/images/street-art.jpeg',
      description: 'Famous murals and installations throughout Georgetown',
      category: 'art',
      visitTime: '2-3 hours',
      price: 'Free'
    },
    {
      id: 5,
      name: 'Fort Cornwallis',
      image: '/images/fort-cornwallis.jpg',
      description: 'Historic British colonial fort with rich heritage',
      category: 'historical',
      visitTime: '1-2 hours',
      price: 'RM 20'
    },
    {
      id: 6,
      name: 'Botanical Gardens',
      image: '/images/botanical-garden.jpeg',
      description: 'Century-old tropical gardens with diverse flora',
      category: 'nature',
      visitTime: '2-3 hours',
      price: 'Free'
    },
    {
      id: 7,
      name: 'Peranakan Museum',
      image: '/images/peranakan-mansion.jpg',
      description: 'Showcasing Penang\'s unique Chinese heritage',
      category: 'art',
      visitTime: '1-2 hours',
      price: 'RM 15'
    },
    {
      id: 8,
      name: 'Goddess of Mercy Temple',
      image: '/images/goddess-of-mercy.jpeg',
      description: 'Historic Buddhist temple with beautiful architecture',
      category: 'religious',
      visitTime: '1 hour',
      price: 'Free'
    }
  ];

  const filteredSpots = activeCategory === 'all' 
    ? spots 
    : spots.filter(spot => spot.category === activeCategory);

  return (
    <SpotsContainer>
      <HeroSection>
        <div>
          <h1>Penang Attractions</h1>
          <p>Discover the charm of Penang's finest destinations</p>
        </div>
      </HeroSection>

      <CategoryTabs>
        {categories.map(category => (
          <Tab
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Tab>
        ))}
      </CategoryTabs>

      <SpotGrid>
        {filteredSpots.map(spot => (
          <SpotCard key={spot.id} to={`/spots/${spot.id}`}>
            <SpotImage src={spot.image} alt={spot.name} />
            <SpotInfo>
              <h3>{spot.name}</h3>
              <p>{spot.description}</p>
              <SpotMeta>
                <span>
                  <i className="far fa-clock"></i> {spot.visitTime}
                </span>
                <span>
                  <i className="fas fa-ticket-alt"></i> {spot.price}
                </span>
              </SpotMeta>
            </SpotInfo>
          </SpotCard>
        ))}
      </SpotGrid>
    </SpotsContainer>
  );
};

export default Spots; 