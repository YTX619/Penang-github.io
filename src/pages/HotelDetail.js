import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReviewSection from '../components/Reviews/ReviewSection';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const SubImages = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

const SubImage = styled.img`
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-radius: 10px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookingCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
`;

const Amenities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #f0a500;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #d89400;
  }
`;

const HotelDetail = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'standard'
  });

  // Sample hotel data
  const hotel = {
    id: 1,
    name: 'Eastern & Oriental Hotel',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80'
    ],
    description: 'A historic luxury hotel offering colonial charm and modern comfort with stunning sea views.',
    amenities: [
      'Free Wi-Fi',
      'Swimming Pool',
      'Spa & Wellness Center',
      'Fine Dining Restaurant',
      'Fitness Center',
      '24/7 Room Service'
    ],
    roomTypes: [
      { type: 'deluxe', name: 'Deluxe Room', price: 'RM 550/night' },
      { type: 'suite', name: 'Heritage Suite', price: 'RM 850/night' },
      { type: 'presidential', name: 'Presidential Suite', price: 'RM 1,500/night' }
    ]
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking information:', bookingData);
    // Implement booking logic
  };

  React.useEffect(() => {
    console.log('Hotel ID:', id);
    // Add hotel data fetching logic
  }, [id]);

  return (
    <Container>
      <h1>{hotel.name}</h1>
      
      <ImageGallery>
        <MainImage src={hotel.images[0]} alt={hotel.name} />
        <SubImages>
          <SubImage src={hotel.images[1]} alt={hotel.name} />
          <SubImage src={hotel.images[2]} alt={hotel.name} />
        </SubImages>
      </ImageGallery>
      
      <ContentGrid>
        <div>
          <h2>Hotel Description</h2>
          <p>{hotel.description}</p>
          
          <h2>Amenities & Services</h2>
          <Amenities>
            {hotel.amenities.map((amenity, index) => (
              <AmenityItem key={index}>
                <i className="fas fa-check"></i>
                {amenity}
              </AmenityItem>
            ))}
          </Amenities>
        </div>
        
        <BookingCard>
          <h3>Book a Room</h3>
          <BookingForm onSubmit={handleBooking}>
            <Input
              type="date"
              value={bookingData.checkIn}
              onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
              placeholder="Check-in Date"
            />
            <Input
              type="date"
              value={bookingData.checkOut}
              onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
              placeholder="Check-out Date"
            />
            <select
              value={bookingData.roomType}
              onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
            >
              {hotel.roomTypes.map(room => (
                <option key={room.type} value={room.type}>
                  {room.name} - {room.price}
                </option>
              ))}
            </select>
            <Button type="submit">Book Now</Button>
          </BookingForm>
        </BookingCard>
      </ContentGrid>
      
      <ReviewSection />
    </Container>
  );
};

export default HotelDetail; 