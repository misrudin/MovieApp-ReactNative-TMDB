import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Badge, Text} from 'react-native-paper';

const List = ({data, onPress}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity style={styles.height} onPress={() => onPress(data.id)}>
        <Card>
          {data.poster_path ? (
            <Card.Cover
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
              }}
              style={styles.cardCover}
            />
          ) : (
            <View
              style={[
                styles.cardCover,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Text style={{color: '#acacac', fontWeight: 'bold'}}>
                No Image
              </Text>
            </View>
          )}
        </Card>
        <Badge size={25} style={styles.badgeTop}>
          {data.name}
        </Badge>
        <Badge size={25} style={styles.badgeBotom}>
          {data.first_air_date}
        </Badge>
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  cardView: {
    width: 200,
    height: 300,
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },
  badgeBotom: {
    fontWeight: 'normal',
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: -10,
    color: '#acacac',
  },
  badgeTop: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: '100%',
  },
  cardCover: {
    borderRadius: 5,
    height: '100%',
  },
  cardTitle: {
    position: 'absolute',
    bottom: -20,
    left: 0,
  },
  height: {height: '90%'},
  badge: {
    marginRight: 10,
    fontWeight: 'bold',
  },
});
