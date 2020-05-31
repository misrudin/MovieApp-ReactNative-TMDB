import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Colors} from '../../config/Colors';
import Header2 from '../../components/Header2';
import Trending from '../../components/Trending';
import Popular from '../../components/Popular';
import Tv from '../../components/Tv';
import {useDispatch, useSelector} from 'react-redux';
import {
  getHomeMoviePopular,
  getHomeTvPopular,
  getHomeTrending,
} from '../../public/redux/actions/home';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {homePopular, homeTv, trending} = useSelector((state) => state.home);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDataMovies = async () => {
      setLoading(true);
      await dispatch(getHomeMoviePopular()).then(async () => {
        await dispatch(getHomeTvPopular()).then(async () => {
          await dispatch(getHomeTrending()).then(() => {
            setLoading(false);
          });
        });
      });
    };

    getDataMovies();
  }, [dispatch]);

  const bukaMenu = () => {
    navigation.toggleDrawer();
  };

  const PlaceHolder = () => {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder} />
        <View style={styles.p1} />
        <View style={styles.p2}>
          <View style={styles.child1} />
          <View style={styles.child1} />
        </View>
        <View style={styles.p3} />
        <View style={styles.p2}>
          <View style={styles.child1} />
          <View style={styles.child1} />
        </View>
        <ActivityIndicator size="large" style={styles.loading} color="red" />
      </View>
    );
  };

  return (
    <>
      <Header2 onPress={bukaMenu} search={null} />
      <View style={styles.container}>
        {loading ? (
          <PlaceHolder />
        ) : (
          <ScrollView>
            <Trending data={trending} navigation={navigation} />
            <Popular
              data={homePopular}
              nav={(lokasi) => navigation.navigate(lokasi)}
            />
            <Tv data={homeTv} nav={(lokasi) => navigation.navigate(lokasi)} />
          </ScrollView>
        )}
      </View>
    </>
  );
};

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

  placeholder: {
    backgroundColor: Colors.black,
    width: width,
    height: height / 3,
  },
  p1: {
    width: 100,
    height: 20,
    backgroundColor: Colors.black,
    marginTop: 40,
    marginBottom: 5,
  },
  p2: {
    backgroundColor: Colors.lightBlack,
    width: width,
    height: height / 3,
    flexDirection: 'row',
  },
  child1: {
    backgroundColor: Colors.black,
    width: 200,
    height: 300,
    margin: 5,
    borderRadius: 5,
  },
  p3: {
    width: 100,
    height: 20,
    backgroundColor: Colors.black,
    marginTop: 70,
    marginBottom: 5,
  },
});

export default Home;
