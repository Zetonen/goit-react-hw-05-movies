import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 25px 0;
  box-shadow: 0 0 22px 0.5px rgb(0, 0, 0);
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 24px;
`;

export const HeaderListItem = styled(NavLink)`
  &.active {
    font-weight: 600;
    color: #fc7878;
  }
`;
