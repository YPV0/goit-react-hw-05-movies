import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovies } from 'API/API';
import {
  MovieImage,
  MovieItem,
  MovieTitle,
  MoviesList,
  SearchButton,
  SearchForm,
  SearchInput,
  StyledLink,
} from './Movies.styled';


const Movies = () => {
  const [movies, setMovies] = useState('');
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('query')) {
      getMovies(searchParams.get('query')).then(data => setMovies(data));
    }
  }, [searchParams]);

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search) {
      navigate(`/movies?query=${encodeURIComponent(search)}`);
      setSearch('');
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={handleSearch}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <MoviesList>
        {movies &&
          movies.map(movie => {
            const movieImage = movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfIYpE8vRHlXT5eFwaqr9RGezphQiy3UeQ&usqp=CAU';
            return (
              <MovieItem key={movie.id}>
                <StyledLink
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location, searchQuery: search },
                  }}
                >
                  <MovieImage src={movieImage} alt={movie.title} />
                  <MovieTitle>{movie.title}</MovieTitle>
                </StyledLink>
              </MovieItem>
            );
          })}
      </MoviesList>
    </>
  );
};

export default Movies;
////
