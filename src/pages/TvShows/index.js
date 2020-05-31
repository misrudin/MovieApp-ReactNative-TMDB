import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import Header from '../../components/Header';
import TvList from '../../components/TvList';
import {useDispatch, useSelector} from 'react-redux';
import {getDataTv} from '../../public/redux/actions/tvshow';

const TvShow = ({navigation}) => {
  const dispatch = useDispatch();
  const {datatv} = useSelector((state) => state.tvshow);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDataMovies = async () => {
      setLoading(true);
      await dispatch(getDataTv(1, 'popular')).then(() => setLoading(false));
    };

    getDataMovies();
  }, [dispatch]);

  const getMovies = async (type) => {
    setLoading(true);
    await dispatch(getDataTv(1, type)).then(() => setLoading(false));
  };

  const bukaMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <Header onPress={bukaMenu} search={null} />
      <View style={styles.container}>
        {loading ? null : error ? (
          <Text>Error, Plaese try again</Text>
        ) : (
          <TvList
            data={datatv}
            onPress={(type) => getMovies(type)}
            nav={(lokasi) => navigation.navigate(lokasi)}
          />
        )}
        {loading ? <ActivityIndicator size="large" color="#fff" /> : null}
      </View>
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
});
