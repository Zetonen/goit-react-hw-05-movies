import { fetchFilmReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Content, Item, List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const functionName = async () => {
      try {
        const responseReviews = await fetchFilmReviews(movieId);
        const reviewsData = responseReviews.data.results;
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    functionName();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(item => (
            <Item key={item.id}>
              <Author>Author: {item.author}</Author>
              <Content>{item.content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <p>Not</p>
      )}
    </>
  );
};

export default Reviews;
