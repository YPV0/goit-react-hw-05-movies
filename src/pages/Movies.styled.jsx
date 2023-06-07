import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const SearchForm = styled.form`
  display: flex;
  gap: 1em;
  margin-bottom: 2em;
  max-width: 500px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5em;
`;

export const SearchButton = styled.button`
  padding: 0.5em 1em;
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
`;

export const MovieItem = styled.li``;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const MovieTitle = styled.p`
  margin-top: 0.5em;
`;
export const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;
