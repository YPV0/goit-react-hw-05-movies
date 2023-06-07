import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/API';

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
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <Link
                to={{
                  pathname: `/reviews/${review.id}`,
                  state: { from: location },
                }}
              >
                <p>{review.author}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
