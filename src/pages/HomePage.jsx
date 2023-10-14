import { fetchPopularFilms } from 'api';
import { Container } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 50px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchPopularFilms();
        const results = await response.data.results;
        setFilms(results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilm();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Trending today</Title>
        {loading && <Loader />}
        {error && <p>Oops..Something went wrong...</p>}
        {films.length > 0 && <MoviesList items={films} />}
      </Container>
    </Wrapper>
  );
};

export default HomePage;
