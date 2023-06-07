import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/API';
import { HomeTitle, MovieItem, MovieLink, MovieList } from './home.styled';

const Home = () => {
  const [trending, setTrending] = useState('');

  useEffect(() => {
    getTrending().then(data => setTrending(data));
  }, []);

  return (
    <>
      <HomeTitle>Trending Today</HomeTitle>
      <MovieList>
        {trending &&
          trending.map(movie =>
            movie.title ? (
              <MovieItem key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`}>
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
