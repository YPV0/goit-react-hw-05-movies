import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/API';

import { ReviewItem, ReviewsList, StyledLink, StyledP } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getMovieReviews(movieId).then(data => setReviews(data));
    }
  }, [movieId]);

  return (
    <>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <StyledLink
                to={{
                  pathname: `/reviews/${review.id}`,
                  state: { from: location },
                }}
              >
                <p>{review.author}</p>
              </StyledLink>
            </ReviewItem>
          ))
        ) : (
          <StyledP>We don't have any reviews for this movie</StyledP>
        )}
      </ReviewsList>
    </>
  );
};

export default Reviews;
