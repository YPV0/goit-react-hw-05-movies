import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/API/API';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const castPath =
    location.pathname === `/movies/${movieId}/cast`
      ? `/movies/${movieId}`
      : `/movies/${movieId}/cast`;

  const reviewsPath =
    location.pathname === `/movies/${movieId}/reviews`
      ? `/movies/${movieId}`
      : `/movies/${movieId}/reviews`;

  return (
    <>
      <h1>{movie.title}</h1>
      <p>User Score: {movie.vote_average * 10}%</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        <li>
          <NavLink to={castPath}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={reviewsPath}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
