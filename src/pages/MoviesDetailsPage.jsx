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
  Image,
} from './MoveDetailsPage.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';
export const noMovieImage =
  'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';

const MoviesDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchFilm(movieId);
        const filmDetails = response.data;
        setFilm(filmDetails);
      } catch (error) {
        setError(true);
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
      <Link to={backLinkHref.current}>Back</Link>
      {error && <p>Oops..Something went wrong...</p>}
      {loading && <Loader />}
      {film && (
        <>
          <Description>
            <Image
              src={
                film?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${film?.backdrop_path}`
                  : noMovieImage
              }
              alt={film?.title}
            />

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MoviesDetailsPage;
