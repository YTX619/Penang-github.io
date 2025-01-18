import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const HeroContent = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const VideoSection = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  display: block;
  border-radius: 15px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Explore Penang</h1>
          <p>Experience a unique journey of culture and cuisine</p>
        </HeroContent>
      </HeroSection>

      <VideoSection>
        <Video controls autoPlay muted loop>
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoSection>
    </HomeContainer>
  );
};

export default Home; 