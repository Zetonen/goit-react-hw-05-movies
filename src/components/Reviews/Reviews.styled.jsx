import styled from 'styled-components';

export const List = styled.ul`
  padding: 15px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.p`
  font-weight: 500;
`;
