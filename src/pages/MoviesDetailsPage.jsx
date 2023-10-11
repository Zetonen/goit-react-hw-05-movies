import { fetchFilm } from 'api';
import { Suspense, useEffect, useState } from 'react';
import {
  Title,
  Description,
  TextWrapper,
  SubTitle,
  Genres,
  GenresTitle,
  AdditionalDetails,
  LinkDetails,
  AdditionalTitle,
  ListLink,
} from './MoveDetailsPage.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import noMovieImage from '../img/No-image-poster.png';

const MoviesDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        setLoading(true);
        const response = await fetchFilm(movieId);
        const filmDetails = response.data;
        setFilm(filmDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilmDetails();
  }, [movieId]);

  const rate = film?.vote_average
    ? `Use Score: ${(film?.vote_average * 10).toFixed(2)}%`
    : 'no have rate';
  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Description>
            {film ? <img
              src={`https://image.tmdb.org/t/p/w500/${film?.backdrop_path}`}
              alt={film?.title}
            /> : <img
            src={`https://image.tmdb.org/t/p/w500/${noMovieImage}`}
            alt={film?.title ? film?.title : 'noMovie'}/>}
            
            <TextWrapper>
              <Title>{film?.title}</Title>
              <p>{rate}</p>
              <SubTitle>Overview</SubTitle>
              <p>{film?.overview}</p>
              <GenresTitle>Genres</GenresTitle>
              <Genres>
                {film?.genres.map(item => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </Genres>
            </TextWrapper>
          </Description>
          <AdditionalDetails>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <ListLink>
              <li>
                <LinkDetails to="cast">Cast</LinkDetails>
              </li>
              <li>
                <LinkDetails to="reviews">Reviews</LinkDetails>
              </li>
            </ListLink>
          </AdditionalDetails>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MoviesDetailsPage;
