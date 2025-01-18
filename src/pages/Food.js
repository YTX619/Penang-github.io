import React from 'react';
import styled from 'styled-components';

const FoodContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FoodHeader = styled.div`
  text-align: center;
  margin: 2rem 0 4rem;
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const FoodCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FoodImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const FoodInfo = styled.div`
  padding: 1.5rem;
`;

const Price = styled.span`
  color: #f0a500;
  font-weight: bold;
`;

const Location = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Food = () => {
  const foodItems = [
    {
      id: 1,
      name: 'Penang Laksa',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      description: 'A unique spicy and sour fish noodle soup, blending Malay and Chinese flavors',
      price: 'RM 6-8',
      location: 'Georgetown, New Lane Hawker Center'
    },
    {
      id: 2,
      name: 'Char Kway Teow',
      image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80',
      description: 'One of Penang\'s most famous street foods, stir-fried flat rice noodles',
      price: 'RM 7-10',
      location: 'New Lane Night Market'
    },
    {
      id: 3,
      name: 'Nyonya Kuih',
      image: 'https://images.unsplash.com/photo-1553452118-621e1f860f43?auto=format&fit=crop&w=800&q=80',
      description: 'Colorful traditional Peranakan desserts with unique textures and flavors',
      price: 'RM 1-3/piece',
      location: 'Penang Street Vendors'
    }
  ];

  return (
    <FoodContainer>
      <FoodHeader>
        <h1>Penang Cuisine</h1>
        <p>Explore Penang's unique food culture and local flavors</p>
      </FoodHeader>
      
      <FoodGrid>
        {foodItems.map(item => (
          <FoodCard key={item.id}>
            <FoodImage src={item.image} alt={item.name} />
            <FoodInfo>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Price>{item.price}</Price>
              <Location>
                <i className="fas fa-map-marker-alt"></i> {item.location}
              </Location>
            </FoodInfo>
          </FoodCard>
        ))}
      </FoodGrid>
    </FoodContainer>
  );
};

export default Food; 