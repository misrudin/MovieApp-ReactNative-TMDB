import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../config/Colors';
import List from './List';
import {useDispatch, useSelector} from 'react-redux';
import {getVideo, getDetail, getCast} from '../../public/redux/actions/movies';

const Popular = ({data, nav}) => {
  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();

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
    <View style={styles.container}>
      <Text style={styles.title}>Popular Movie</Text>
      {data ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.results}
          renderItem={({item}) => (
            <List data={item} onPress={(id) => openDetail(id)} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : null}
      {loading2 ? (
        <ActivityIndicator size="large" style={styles.loading} color="#fff" />
      ) : null}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    marginTop: 10,
  },
  title: {
    paddingLeft: 5,
    fontWeight: 'bold',
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
