import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  gap: 20px;
  padding: 25px 0 10px;
  border-bottom: 1px solid #000000;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const GenresTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Genres = styled.p`
  display: flex;
  gap: 10px;
`;

export const AdditionalDetails = styled.div`
  padding: 15px;
  border-bottom: 1px solid #000000;
`;

export const AdditionalTitle = styled.p`
  margin-bottom: 30px;
`;

export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkDetails = styled(Link)`
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
