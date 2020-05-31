import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Cast from './Cast';
import {Colors} from '../../config/Colors';

const PeopleDetails = () => {
  const {detailPeople, castPeople} = useSelector((state) => state.people);

  console.warn(detailPeople);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieInfo}>
        <View>
          <Card>
            <Card.Cover
              source={{
                uri: `https://image.tmdb.org/t/p/w500${detailPeople.profile_path}`,
              }}
              style={{width: 150, height: 220}}
            />
          </Card>
        </View>
        <View style={{marginLeft: 25}}>
          <Text style={styles.movieTitle}>{detailPeople.name}</Text>
          <Text style={styles.movieYear}>
            {detailPeople.known_for_department}
          </Text>
          <View>
            <View>
              <Text style={styles.movieOver}>{detailPeople.biography}</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={{marginVertical: 20}} />
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.movieTitle}>Acting</Text>
        <Cast data={castPeople} />
      </View>
    </ScrollView>
  );
};

export default PeopleDetails;

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
    maxWidth: 200,
  },
  movieOver: {
    textAlign: 'justify',
    color: Colors.lightBlack,
    marginTop: 7,
    maxWidth: 200,
  },
});
