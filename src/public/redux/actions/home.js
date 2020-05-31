import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const apiKey = '8a902cb4d195e3cd93e77426634d808f';
const lang = 'en-US';

export const getHomeMoviePopular = () => {
  return {
    type: 'GET_HOME_POPULAR',
    payload: axios.get(
      URL + `movie/popular?api_key=${apiKey}&language=${lang}&page=1`,
    ),
  };
};
export const getHomeTvPopular = () => {
  return {
    type: 'GET_HOME_TV_POPULAR',
    payload: axios.get(
      URL + `tv/popular?api_key=${apiKey}&language=${lang}&page=1`,
    ),
  };
};
export const getHomeTrending = () => {
  return {
    type: 'GET_HOME_TRENDING',
    payload: axios.get(URL + `trending/all/day?api_key=${apiKey}&page=1`),
  };
};
