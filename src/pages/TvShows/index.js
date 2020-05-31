import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Colors} from '../../config/Colors';
import Header from '../../components/Header';
import TvList from '../../components/TvList';
import {useDispatch, useSelector} from 'react-redux';
import {getDataTv, searchTv, setTipe} from '../../public/redux/actions/tvshow';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TvShow = ({navigation}) => {
  const dispatch = useDispatch();
  const {datatv} = useSelector((state) => state.tvshow);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    const getDataTvShows = async () => {
      setLoading(true);
      await dispatch(getDataTv(1, 'popular')).then(() => setLoading(false));
    };

    getDataTvShows();
  }, [dispatch]);

  const getTv = async (type) => {
    setLoading(true);
    await dispatch(getDataTv(1, type)).then(() => setLoading(false));
  };

  const bukaMenu = () => {
    navigation.toggleDrawer();
  };

  const search = async (keyword) => {
    setKey(keyword);
    if (keyword) {
      setLoading(true);
      await dispatch(searchTv(keyword, 1)).then(() => setLoading(false));
    } else {
      getTv('popular');
      dispatch(setTipe('popular'));
    }
  };

  return (
    <>
      <Header onPress={bukaMenu} search={(keyword) => search(keyword)} />
      <View style={styles.container}>
        {loading ? null : error ? (
          <Text style={styles.text}>Error, Plaese try again</Text>
        ) : datatv.total_results < 1 ? (
          <Text style={styles.text}>
            No results found with keywords : {key}
          </Text>
        ) : (
          <TvList
            data={datatv}
            onPress={(type) => getTv(type)}
            nav={(lokasi) => navigation.navigate(lokasi)}
            keyword={key}
          />
        )}
        {loading ? (
          <ActivityIndicator size="large" style={styles.loading} color="#fff" />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.badgeBotom}
        onPress={() =>
          Linking.openURL('https://www.themoviedb.org/tv/new?language=en-US')
        }>
        <Badge size={45}>
          <Icon name="plus" size={20} color={Colors.white} />
        </Badge>
      </TouchableOpacity>
    </>
  );
};

export default TvShow;

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
  badgeBotom: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});
