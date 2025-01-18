import React, { useState } from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  margin-top: 3rem;
`;

const ReviewForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 1rem 0;
  min-height: 100px;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Star = styled.span`
  cursor: pointer;
  color: ${props => props.selected ? '#ffd700' : '#ddd'};
  font-size: 1.5rem;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  
  // 模拟评价数据
  const reviews = [
    {
      id: 1,
      user: 'John Smith',
      rating: 5,
      date: '2024-01-15',
      content: 'Excellent service, clean rooms, and amazing views!'
    },
    {
      id: 2,
      user: 'Sarah Wilson',
      rating: 4,
      date: '2024-01-10',
      content: 'Great location and delicious breakfast options.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { rating, review });
    // Implement review submission logic
  };

  return (
    <ReviewContainer>
      <h2>Guest Reviews</h2>
      
      <ReviewForm onSubmit={handleSubmit}>
        <h3>Write a Review</h3>
        <StarRating>
          {[1, 2, 3, 4, 5].map(star => (
            <Star
              key={star}
              selected={star <= rating}
              onClick={() => setRating(star)}
            >
              ★
            </Star>
          ))}
        </StarRating>
        <TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your experience..."
        />
        <Button type="submit">Submit Review</Button>
      </ReviewForm>

      <ReviewList>
        {reviews.map(review => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <div>
                <strong>{review.user}</strong>
                <div>{'★'.repeat(review.rating)}</div>
              </div>
              <span>{review.date}</span>
            </ReviewHeader>
            <p>{review.content}</p>
          </ReviewCard>
        ))}
      </ReviewList>
    </ReviewContainer>
  );
};

export default ReviewSection; 