import { handleSearch } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

export const StyledForm = styled(Form)`
  display: flex;
  gap: 8px;
  padding: 20px;
`;

const quizSchema = Yup.object().shape({
  search: Yup.string().required('Required'),
});

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);
  const search = searchParams.get('search');
  useEffect(() => {
    const fetchFilm = async () => {
      if (!search) {
        setFilms([]);
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const response = await handleSearch(search);
        setFilms(response);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchFilm();
  }, [search]);
  const changeSearchFilm = ({ search }) => {
    searchParams.set('search', search);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={quizSchema}
        onSubmit={(values, actions) => {
          changeSearchFilm(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Field type="text" name="search" />
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
      {loading && <Loader />}
      {error && <p>Oops..Something went wrong...</p>}

      {films.length > 0 && !loading ? <MoviesList items={films}></MoviesList> : null}
    </div>
  );
};

export default MoviesPage;
