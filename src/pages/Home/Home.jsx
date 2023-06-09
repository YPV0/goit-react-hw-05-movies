import { useState, useEffect } from 'react';
import { getTrending } from 'API/API';
import { HomeTitle, MovieItem, MovieLink, MovieList } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState('');
  const location = useLocation();

  useEffect(() => {
    getTrending().then(data => setTrending(data));
  }, []);

  const handleClick = () => {
    sessionStorage.setItem('lastLocation', location.pathname);
  };

  return (
    <>
      <HomeTitle>Trending Today</HomeTitle>
      <MovieList>
        {trending &&
          trending.map(movie =>
            movie.title ? (
              <MovieItem key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`} onClick={handleClick}>
                  <p>{movie.title}</p>
                </MovieLink>
              </MovieItem>
            ) : null
          )}
      </MovieList>
    </>
  );
};

export default Home;
