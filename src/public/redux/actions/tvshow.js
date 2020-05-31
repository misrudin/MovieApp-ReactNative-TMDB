import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const apiKey = '8a902cb4d195e3cd93e77426634d808f';
const lang = 'en-US';

export const getDataTv = (page, type) => {
  return {
    type: 'GET_TV',
    payload: axios.get(
      URL + `tv/${type}?api_key=${apiKey}&language=${lang}&page=${page}`,
    ),
  };
};

export const getVideo = (id) => {
  return {
    type: 'GET_TV_VIDEO',
    payload: axios.get(URL + `tv/${id}/videos?api_key=${apiKey}`),
  };
};
export const getDetail = (id) => {
  return {
    type: 'GET_TV_DETAIL',
    payload: axios.get(URL + `tv/${id}?api_key=${apiKey}`),
  };
};
export const getCast = (id) => {
  return {
    type: 'GET_TV_CAST',
    payload: axios.get(URL + `tv/${id}/credits?api_key=${apiKey}`),
  };
};

export const searchTv = (keyword, page) => {
  return {
    type: 'GET_TV',
    payload: axios.get(
      URL + `search/tv?api_key=${apiKey}&query=${keyword}&page=${page}`,
    ),
  };
};
