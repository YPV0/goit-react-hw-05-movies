import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMovies } from 'components/API/API';

export const Movies = () => {
  const [movies, setMovies] = useState('');
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();
  const location = useLocation();

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
      getMovies(search).then(data => setMovies(data));
      setSearch('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
