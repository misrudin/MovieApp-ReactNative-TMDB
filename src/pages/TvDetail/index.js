import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import MovieVideo from './Video';
import Cast from './Cast';
import {Colors} from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

function convertToHours(time) {
  let hour = Math.floor(time / 60);
  hour = hour;

  let minutes = time % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  if (time > 60) {
    return hour && minutes ? `${hour}h ${minutes}m` : 'Uninformed';
  } else {
    return minutes ? `${minutes}m` : 'Uninformed';
  }
}

const TvDetails = ({navigation}) => {
  const {tvdetail} = useSelector((state) => state.tvshow);
  const [genres, setGenres] = useState('');

  // console.warn(tvdetail.episode_run_time);

  useEffect(() => {
    const getgenres = tvdetail.genres.map((genre) => genre.name).join(', ');
    setGenres(getgenres);
  }, [tvdetail]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} />
      <View>
        <Card>
          <Card.Cover
            source={{
              uri: `https://image.tmdb.org/t/p/w500${tvdetail.backdrop_path}`,
            }}
            style={{}}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 30, left: 20}}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color={Colors.white} />
          </TouchableOpacity>
        </Card>
      </View>
      <View style={styles.movieInfo}>
        <View>
          <Card>
            <Card.Cover
              source={{
                uri: `https://image.tmdb.org/t/p/w500${tvdetail.poster_path}`,
              }}
              style={{width: 80, height: 120}}
            />
          </Card>
        </View>
        <View style={{marginLeft: 25}}>
          <Text style={styles.movieTitle}>
            {tvdetail.name} ({new Date(tvdetail.first_air_date).getFullYear()})
          </Text>
          <Text style={styles.movieYear}>
            {tvdetail.first_air_date}({tvdetail.original_language})
          </Text>
          <View style={{marginTop: 7}}>
            <View>
              <Text style={styles.movieVal}>{genres}</Text>
              <Text style={styles.movieVal}>
                {convertToHours(tvdetail.episode_run_time)}
              </Text>
              <MovieVideo />
            </View>
          </View>
        </View>
      </View>
      <Divider style={{marginVertical: 20}} />
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.movieTitle}>Overview</Text>
        <Text style={styles.movieOver}>{tvdetail.overview}</Text>
      </View>
      <Divider style={{marginVertical: 20}} />
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.movieTitle}>Top Billed Cast</Text>
        <Cast />
      </View>
    </ScrollView>
  );
};

export default TvDetails;

const styles = StyleSheet.create({
  container: {},
  movieInfo: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    maxWidth: 250,
  },
  movieYear: {
    fontSize: 15,
    color: '#acacac',
    textTransform: 'uppercase',
  },
  movieText: {
    marginVertical: 3,
    color: 'grey',
    fontSize: 13,
  },
  movieVal: {
    marginVertical: 3,
    fontSize: 13,
    maxWidth: 250,
  },
  movieOver: {
    textAlign: 'justify',
    color: Colors.lightBlack,
    marginTop: 7,
  },
});
