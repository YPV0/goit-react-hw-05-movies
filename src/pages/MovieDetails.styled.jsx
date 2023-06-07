import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const MovieTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;

export const OverviewTitle = styled.h2`
  font-size: 1.6em;
  margin-top: 1em;
`;

export const GenreList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1em;
`;

export const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 22px;
  padding: 5px;
  border: 2px solid black;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InfoWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1em;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 50px;
`;
