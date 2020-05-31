import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Badge, Text} from 'react-native-paper';

const List = ({data}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity style={{height: '90%'}}>
        <Card>
          <Card.Cover
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
            }}
            style={{
              borderRadius: 5,
              height: '100%',
            }}
          />
        </Card>
        <Badge
          size={25}
          style={{
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            width: '100%',
          }}>
          {data.name}
        </Badge>
        <Text style={{color: '#acacac', fontSize: 12, textAlign: 'center'}}>
          {data.known_for[0].title || data.known_for[0].name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    height: 300,
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },
});
