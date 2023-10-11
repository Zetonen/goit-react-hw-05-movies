import axios from 'axios';

const KEY = '094e521ece6a91594bf23d7b90ab7858';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: KEY,
    language: 'en-US',
  },
};

export const fetchPopularFilms = async () => {
  const response = await axios.get(`/movie/popular`, params);
  return response;
};

export const fetchFilm = async filmId => {
  const response = await axios.get(`/movie/${filmId}`, params);
  return response;
};

export const handleSearch = async movieName => {
    const response = await axios.get(`/search/movie?query=${movieName}`, params);
    return response.data.results;
  };

export const fetchFilmCast = async filmId => {
  const response = await axios.get(`/movie/${filmId}/credits`, params);
  return response;
};

export const fetchFilmReviews = async filmId => {
    const response = await axios.get(`/movie/${filmId}/reviews`, params);
    return response;
  };
