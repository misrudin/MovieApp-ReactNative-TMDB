import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Badge, Text} from 'react-native-paper';

const List = ({data, onPress}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        style={{height: '90%'}}
        onPress={() => onPress(data.id)}>
        <Card>
          <Card.Cover
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            }}
            style={{
              borderRadius: 5,
              height: '100%',
            }}
          />
          <Card.Title
            style={{
              position: 'absolute',
              bottom: -20,
              left: 0,
            }}
            right={(props) => (
              <Badge
                {...props}
                size={22}
                style={{
                  marginRight: 10,
                  fontWeight: 'bold',
                }}>
                {data.vote_average}
              </Badge>
            )}
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
          {data.first_air_date}
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
