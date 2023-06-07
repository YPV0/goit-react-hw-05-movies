import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieCast } from 'components/API/API';
import {
  ActorImage,
  ActorInfo,
  ActorName,
  CastItem,
  CastList,
  StyledLink,
} from './Cast.styled';

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
      <CastList>
        {cast &&
          cast.map(actor => {
            const image = actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfIYpE8vRHlXT5eFwaqr9RGezphQiy3UeQ&usqp=CAU';

            return (
              <CastItem key={actor.id}>
                <StyledLink
                  to={{
                    pathname: `/cast/${actor.id}`,
                    state: { from: location },
                  }}
                >
                  <ActorInfo>
                    <ActorImage src={image} alt={actor.name} />
                    <ActorName>{actor.name}</ActorName>
                  </ActorInfo>
                </StyledLink>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};

export default Cast;
