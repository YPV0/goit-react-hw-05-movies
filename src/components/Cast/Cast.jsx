import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieCast } from 'components/API/API';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getMovieCast(movieId).then(data => setCast(data));
    }
  }, [movieId]);

  return (
    <>
      <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <Link
                to={{
                  pathname: `/cast/${actor.id}`,
                  state: { from: location },
                }}
              >
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}
                <p>{actor.name}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
