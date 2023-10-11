import { useLocation } from 'react-router-dom';
import { Item, LinkDetails, List } from './MoviesList.styled';

export const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <LinkDetails to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </LinkDetails>
        </Item>
      ))}
    </List>
  );
};
