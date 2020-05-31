import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../config/Colors';
import List from './List';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMoviesPopular,
  setTipe,
  getVideo,
  getDetail,
  getCast,
  searchMovie,
} from '../../public/redux/actions/movies';

const MovieList = ({data, onPress, nav, keyword}) => {
  const [page, setPage] = useState(2);
  let [results, setResults] = useState(data.results);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const {tipe} = useSelector((state) => state.movies);

  const getMovie = (e) => {
    setLoading(true);
    dispatch(setTipe(e));
    setLoading(false);
    onPress(e);
  };

  const loadMore = async () => {
    if (!keyword) {
      if (page < data.total_pages) {
        setLoading(true);
        await dispatch(getMoviesPopular(page, tipe)).then((res) => {
          setTimeout(() => {
            setResults([...results, ...res.value.data.results]);
            setPage(page + 1);
            setLoading(false);
          }, 500);
        });
      }
    } else {
      if (page < data.total_pages) {
        setLoading(true);
        await dispatch(searchMovie(keyword, page)).then((res) => {
          setTimeout(() => {
            setResults([...results, ...res.value.data.results]);
            setPage(page + 1);
            setLoading(false);
          }, 500);
        });
      }
    }
  };

  const openDetail = (id) => {
    setLoading2(true);
    dispatch(getVideo(id)).then(() => {
      dispatch(getDetail(id)).then(() => {
        dispatch(getCast(id)).then(() => {
          nav('Detail');
          setLoading2(false);
        });
      });
    });
  };

  return (
    <>
      {keyword ? null : !show ? null : (
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => getMovie('popular')}
            style={tipe === 'popular' ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getMovie('now_playing')}
            style={
              tipe === 'now_playing' ? styles.buttonActive : styles.button
            }>
            <Text style={styles.text}>Now Playing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getMovie('upcoming')}
            style={tipe === 'upcoming' ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getMovie('top_rated')}
            style={tipe === 'top_rated' ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>Top Rated</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.container}>
        {data ? (
          <FlatList
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              loadMore();
            }}
            // onScrollBeginDrag={(e) => setShow(false)}
            // onScrollEndDrag={(e) => setShow(true)}
            data={results}
            renderItem={({item}) => (
              <List data={item} onPress={(id) => openDetail(id)} />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}
        {loading ? <ActivityIndicator size="small" color="#fff" /> : null}
      </View>
      {loading2 ? (
        <ActivityIndicator size="large" style={styles.loading} color="#fff" />
      ) : null}
    </>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    flex: 1,
  },
  wrapper: {flexDirection: 'row', padding: 10, justifyContent: 'center'},
  button: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonActive: {
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },

  text: {
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
});
