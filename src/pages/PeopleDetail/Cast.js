import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Colors} from '../../config/Colors';

const peopleCasts = ({data}) => {
  return (
    <View style={{marginTop: 10}}>
      {!data.cast
        ? null
        : data.cast.map((e, i) => {
            return (
              <View key={i} style={styles.container}>
                <Text style={styles.name}>{e.title || e.name}</Text>
                <Text style={styles.des}>
                  {e.character ? ' As ' + e.character : ''}
                </Text>
              </View>
            );
          })}
    </View>
  );
};

export default peopleCasts;

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 4,
    paddingVertical: 8,
    flexDirection: 'row',

    shadowOffset: {width: 2, height: 2},
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  des: {
    fontSize: 13,
    color: '#acacac',
    maxWidth: 250,
  },
});
