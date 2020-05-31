import React, {useState} from 'react';
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
  getDataTv,
  getVideo,
  getDetail,
  getCast,
  searchTv,
  setTipe,
} from '../../public/redux/actions/tvshow';

const TvList = ({data, onPress, nav, keyword}) => {
  const [page, setPage] = useState(2);
  let [results, setResults] = useState(data.results);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {tipe} = useSelector((state) => state.tvshow);
  const [loading2, setLoading2] = useState(false);

  const getMovie = (e) => {
    dispatch(setTipe(e));
    onPress(e);
  };

  const loadMore = async () => {
    if (!keyword) {
      if (page < data.total_pages) {
        setLoading(true);
        await dispatch(getDataTv(page, tipe)).then((res) => {
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
        await dispatch(searchTv(keyword, page)).then((res) => {
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
          nav('TvDetail');
          setLoading2(false);
        });
      });
    });
  };

  return (
    <>
      {keyword ? null : (
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => getMovie('popular')}
            style={tipe === 'popular' ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getMovie('airing_today')}
            style={
              tipe === 'airing_today' ? styles.buttonActive : styles.button
            }>
            <Text style={styles.text}>Airing Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => getMovie('on_the_air')}
            style={tipe === 'on_the_air' ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>On Tv</Text>
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

export default TvList;

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
  buttonActive: {
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
