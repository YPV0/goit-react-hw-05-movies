import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h1`
  text-align: center;
  color: #333;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const MovieItem = styled.li`
  background-color: #eee;
  padding: 10px;
  border-radius: 5px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #777;
  }
`;
