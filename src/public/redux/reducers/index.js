import {combineReducers} from 'redux';
import userReducer from './auth';
import moviesReducer from './movies';
import tvshowReducer from './tvshow';
import peopleReducer from './people';
import homeReducer from './home';

const reducers = combineReducers({
  auth: userReducer,
  movies: moviesReducer,
  tvshow: tvshowReducer,
  people: peopleReducer,
  home: homeReducer,
});

export default reducers;
