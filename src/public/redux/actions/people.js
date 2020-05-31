import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const apiKey = '8a902cb4d195e3cd93e77426634d808f';
const lang = 'en-US';

export const getDataPeople = (page) => {
  return {
    type: 'GET_PEOPLE',
    payload: axios.get(
      URL + `person/popular?api_key=${apiKey}&language=${lang}&page=${page}`,
    ),
  };
};
