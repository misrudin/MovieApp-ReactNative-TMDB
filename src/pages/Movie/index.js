import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesPopular, searchMovie} from '../../public/redux/actions/movies';

const Movie = ({navigation}) => {
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.movies);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    const getDataMovies = async () => {
      setLoading(true);
      await dispatch(getMoviesPopular(1, 'popular')).then(() =>
        setLoading(false),
      );
    };

    getDataMovies();
  }, [dispatch]);

  const getMovies = async (type) => {
    setLoading(true);
    await dispatch(getMoviesPopular(1, type)).then(() => setLoading(false));
  };

  const bukaMenu = () => {
    navigation.toggleDrawer();
  };

  const search = async (keyword) => {
    setKey(keyword);
    if (keyword) {
      setLoading(true);
      await dispatch(searchMovie(keyword, 1)).then(() => setLoading(false));
    } else {
      getMovies('popular');
    }
  };

  return (
    <>
      <Header onPress={bukaMenu} search={(keyword) => search(keyword)} />
      <View style={styles.container}>
        {loading ? null : error ? (
          <Text style={styles.text}>Error, Plaese try again</Text>
        ) : popular.total_results < 1 ? (
          <Text style={styles.text}>
            Nothing result found with keyword : {key}
          </Text>
        ) : (
          <MovieList
            data={popular}
            onPress={(type) => getMovies(type)}
            nav={(lokasi) => navigation.navigate(lokasi)}
            keyword={key}
          />
        )}
        {loading ? (
          <ActivityIndicator size="large" style={styles.loading} color="#fff" />
        ) : null}
      </View>
    </>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 0,
  },
  title: {
    color: Colors.white,
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
