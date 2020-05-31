import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const apiKey = '8a902cb4d195e3cd93e77426634d808f';
const lang = 'en-US';

export const getMoviesPopular = (page, type) => {
  return {
    type: 'GET_MOVIES_POPULAR',
    payload: axios.get(
      URL + `movie/${type}?api_key=${apiKey}&language=${lang}&page=${page}`,
    ),
  };
};
export const getVideo = (id) => {
  return {
    type: 'GET_VIDEO',
    payload: axios.get(URL + `movie/${id}/videos?api_key=${apiKey}`),
  };
};
export const getDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: axios.get(URL + `movie/${id}?api_key=${apiKey}`),
  };
};
export const getCast = (id) => {
  return {
    type: 'GET_CAST',
    payload: axios.get(URL + `movie/${id}/credits?api_key=${apiKey}`),
  };
};
export const searchMovie = (keyword, page) => {
  return {
    type: 'GET_MOVIES_POPULAR',
    payload: axios.get(
      URL + `search/movie?api_key=${apiKey}&query=${keyword}&page=${page}`,
    ),
  };
};
export const setTipe = (tipe) => {
  return {
    type: 'SET_TIPE',
    payload: tipe,
  };
};
