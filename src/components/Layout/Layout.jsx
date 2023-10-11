import { Outlet } from 'react-router-dom';
import { Container, Header, HeaderNav, HeaderListItem } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <HeaderNav>
              <HeaderListItem to="/">
                Home
              </HeaderListItem>
              <HeaderListItem to="/movies">
                Movies
              </HeaderListItem>
            </HeaderNav>
          </nav>
        </Container>
      </Header>
      <main>
          <Outlet />
      </main>
    </>
  );
};
