import styled from 'styled-components';
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  background-color: #333;
`;

export const NavLinkItem = styled.li`
  padding: 15px;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #ddd;
    }
  }
`;
