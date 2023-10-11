import { fetchPopularFilms } from 'api';
import { Container } from 'components/Layout/Layout.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 50px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetchPopularFilms();
        const results = await response.data.results;
        setFilms(results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilm();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Trending today</Title>
        <MoviesList items={films}></MoviesList>
      </Container>
    </Wrapper>
  );
};

export default HomePage;