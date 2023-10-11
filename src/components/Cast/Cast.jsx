import { fetchFilmCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardCharter, Name } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const functionName = async () => {
      try {
        const responseCast = await fetchFilmCast(movieId);
        const castData = responseCast.data.cast;
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    };

    functionName();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(item => (
            <CardCharter key={item.credit_id}>
              <img
                width={150}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
              />
              <Name>{item.name}</Name>
              <p>Character: {item.character}</p>
            </CardCharter>
          ))}
        </ul>
      ) : (
        <p>Not</p>
      )}
    </>
  );
};

export default Cast;