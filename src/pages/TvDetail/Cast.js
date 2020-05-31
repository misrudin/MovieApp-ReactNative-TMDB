import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import {Colors} from '../../config/Colors';

const TvCasts = ({movieId}) => {
  const {tvcast} = useSelector((state) => state.tvshow);

  return (
    <View style={{marginTop: 10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tvcast.cast.map((data, index) => (
          <View key={index} style={styles.container}>
            <Avatar.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
              }}
            />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.character}>{data.character}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TvCasts;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    width: 100,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 4,

    shadowOffset: {width: 2, height: 2},
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  character: {
    fontSize: 13,
    color: '#acacac',
    textAlign: 'center',
  },
});
