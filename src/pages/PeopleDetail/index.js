import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Cast from './Cast';
import {Colors} from '../../config/Colors';
import Header3 from '../../components/Header2/Header';

const PeopleDetails = ({navigation}) => {
  const {detailPeople, castPeople} = useSelector((state) => state.people);

  // console.warn(detailPeople);

  return (
    <>
      <Header3 onPress={() => navigation.goBack()} />
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
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <View style={{marginRight: 25}}>
                <Text style={styles.movieText}>Known For</Text>
                <Text style={styles.movieText}>Known Credits</Text>
                <Text style={styles.movieText}>Gender</Text>
                <Text style={styles.movieText}>Place Of Birth</Text>
              </View>
              <View>
                <Text style={styles.movieVal}>
                  {detailPeople.known_for_department}
                </Text>
                <Text style={styles.movieVal}>{castPeople.cast.length}</Text>
                <Text style={styles.movieVal}>
                  {detailPeople.gender === 1 ? 'Female' : 'Male'}
                </Text>
                <Text style={styles.movieVal}>
                  {detailPeople.place_of_birth}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Divider style={{marginVertical: 10}} />
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.movieTitle}>Biography</Text>
          <Text style={styles.movieOver}>{detailPeople.biography}</Text>
        </View>
        <Divider style={{marginVertical: 20}} />
        <View style={{marginHorizontal: 10, marginBottom: 10}}>
          <Text style={styles.movieTitle}>Acting</Text>
          <Cast data={castPeople} />
        </View>
      </ScrollView>
    </>
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
    maxWidth: 100,
  },
  movieOver: {
    textAlign: 'justify',
    color: Colors.lightBlack,
    marginTop: 7,
  },
});
