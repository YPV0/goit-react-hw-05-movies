import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 1em;
`;

export const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export const StyledP = styled.p`
  font-size: 22px;
  padding: 5px;
  color: red;
`;
