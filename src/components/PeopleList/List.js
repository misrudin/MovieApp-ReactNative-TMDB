import React from 'react';
import {Card, Badge} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const List = ({data, onPress}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity style={styles.height} onPress={() => onPress(data.id)}>
        <Card>
          {data.profile_path ? (
            <Card.Cover
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
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
        {typeof data.known_for[0] === 'object' ? (
          <Badge size={25} style={styles.badgeBotom}>
            {data.known_for[0].name || data.known_for[0].title}
          </Badge>
        ) : (
          <Badge size={25} style={styles.badgeBotom}>
            -
          </Badge>
        )}
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
  height: {height: '90%'},
});
