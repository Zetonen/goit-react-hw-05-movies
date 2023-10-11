import { handleSearch } from 'api';
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
  const [films, setFilms] = useState([]);
  const search = searchParams.get('search');
  useEffect(() => {
    const fetchFilm = async () => {
      if (!search) {
        setFilms([]);
        return;
      }
      try {
        const response = await handleSearch(search);
        setFilms(response);
      } catch (error) {
        console.log(error);
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
      {films ? <MoviesList items={films}></MoviesList> : null}
    </div>
  );
};

export default MoviesPage;
