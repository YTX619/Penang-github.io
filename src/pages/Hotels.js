import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HotelContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #f0a500;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #d89400;
  }
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const HotelCard = styled(Link)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HotelInfo = styled.div`
  padding: 1.5rem;
`;

const Price = styled.div`
  color: #f0a500;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Rating = styled.div`
  color: #ffd700;
  margin-top: 0.5rem;
`;

const Hotels = () => {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    priceRange: 'all'
  });

  const hotels = [
    {
      id: 1,
      name: 'Eastern & Oriental Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
      description: 'Luxury seafront hotel with premium services and facilities',
      price: 'From RM 550',
      rating: 5,
      location: 'Georgetown Waterfront'
    },
    {
      id: 2,
      name: 'Penang InterContinental',
      image: 'https://img1.baidu.com/it/u=1805516354,2292863227&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800',
      description: 'Modern business hotel in the city center',
      price: 'From RM 450',
      rating: 4.5,
      location: 'Penang City Center'
    },
    {
      id: 3,
      name: 'Heritage Boutique Hotel',
      image: 'https://img0.baidu.com/it/u=1576753876,1366118022&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500',
      description: 'Boutique hotel in a historic building',
      price: 'From RM 280',
      rating: 4.5,
      location: 'Georgetown Heritage Zone'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search parameters:', searchParams);
    // Add search implementation
  };

  return (
    <HotelContainer>
      <h1>Penang Accommodation</h1>
      
      <SearchSection>
        <SearchForm onSubmit={handleSearch}>
          <Input
            type="date"
            value={searchParams.checkIn}
            onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
            placeholder="Check-in Date"
          />
          <Input
            type="date"
            value={searchParams.checkOut}
            onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
            placeholder="Check-out Date"
          />
          <Select
            value={searchParams.guests}
            onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </Select>
          <Select
            value={searchParams.priceRange}
            onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
          >
            <option value="all">All Prices</option>
            <option value="budget">Budget (&lt;RM 200)</option>
            <option value="mid">Mid-range (RM 200-400)</option>
            <option value="luxury">Luxury (&gt;RM 400)</option>
          </Select>
          <Button type="submit">Search</Button>
        </SearchForm>
      </SearchSection>
      
      <HotelGrid>
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} to={`/hotels/${hotel.id}`}>
            <HotelImage src={hotel.image} alt={hotel.name} />
            <HotelInfo>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p>{hotel.location}</p>
              <Rating>{'★'.repeat(Math.floor(hotel.rating))}</Rating>
              <Price>{hotel.price}</Price>
            </HotelInfo>
          </HotelCard>
        ))}
      </HotelGrid>
    </HotelContainer>
  );
};

export default Hotels; 