import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/API';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState('');

  useEffect(() => {
    getTrending().then(data => setTrending(data));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trending &&
          trending.map(movie =>
            movie.title ? (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <p>{movie.title}</p>
                </Link>
              </li>
            ) : null
          )}
      </ul>
    </>
  );
};
