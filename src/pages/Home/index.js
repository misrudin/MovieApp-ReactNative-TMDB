import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
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

  return (
    <>
      <Header2 onPress={bukaMenu} search={null} />
      <ScrollView>
        <View style={styles.container}>
          {loading ? null : (
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 0,
    // paddingTop: 10,
  },
  title: {
    color: Colors.white,
  },
});

export default Home;
