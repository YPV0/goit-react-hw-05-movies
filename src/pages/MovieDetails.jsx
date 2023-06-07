import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/API/API';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  GenreList,
  InfoWrapper,
  MovieTitle,
  OverviewTitle,
  StyledDiv,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <StyledDiv>
        <button onClick={handleGoBack}>Go Back</button>
        <Card>
          <MovieTitle>{movie.title}</MovieTitle>
          <p>User Score: {movie.vote_average * 10}%</p>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </Card>
        <InfoWrapper>
          <OverviewTitle>Overview</OverviewTitle>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <GenreList>
            <li>
              <StyledLink to={castPath}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to={reviewsPath}>Reviews</StyledLink>
            </li>
          </GenreList>
        </InfoWrapper>
      </StyledDiv>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};
