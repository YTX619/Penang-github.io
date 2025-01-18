import React from 'react';
import styled from 'styled-components';

const CultureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  height: 400px;
  background-image: url('/images/penang-culture.jpg');
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

const CultureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const CultureCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const CultureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CultureInfo = styled.div`
  padding: 1.5rem;
`;

const Culture = () => {
  const cultures = [
    {
      id: 1,
      title: 'Peranakan Culture',
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80',
      description: 'A unique blend of Malay and Chinese cultures, featuring distinctive architecture, cuisine, and fashion.'
    },
    {
      id: 2,
      title: 'Religious Heritage',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80',
      description: 'Penang is a melting pot of religions where Buddhist, Islamic, and Hindu temples stand side by side.'
    },
    {
      id: 3,
      title: 'Street Art',
      image: 'https://img2.baidu.com/it/u=198851188,3401924511&fm=253&fmt=auto&app=138&f=JPEG?w=616&h=500',
      description: 'World-renowned street art that perfectly blends historical stories with modern artistic expression.'
    }
  ];

  return (
    <CultureContainer>
      <HeroSection>
        <div>
          <h1>Penang Culture</h1>
          <p>Discover the charm of our multicultural heritage</p>
        </div>
      </HeroSection>

      <section>
        <h2>Cultural Features</h2>
        <CultureGrid>
          {cultures.map(culture => (
            <CultureCard key={culture.id}>
              <CultureImage src={culture.image} alt={culture.title} />
              <CultureInfo>
                <h3>{culture.title}</h3>
                <p>{culture.description}</p>
              </CultureInfo>
            </CultureCard>
          ))}
        </CultureGrid>
      </section>
    </CultureContainer>
  );
};

export default Culture; 