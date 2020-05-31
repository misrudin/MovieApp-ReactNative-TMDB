import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {Colors} from '../../config/Colors';

const Detail = () => {
  const {video} = useSelector((state) => state.movies);

  return (
    <View style={styles.buttonGroup}>
      {typeof video.results[0] === 'object' ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            YouTubeStandaloneAndroid.playVideo({
              apiKey: 'AIzaSyDnbcf6FHKOYMWzcJmSPhqAEtNq2CzZbOE',
              videoId: video.results[0].key,
              autoplay: true,
              lightboxMode: true,
            })
              .then(() => console.log('Android Standalone Player Finished'))
              .catch((errorMessage) => this.setState({error: errorMessage}))
          }>
          <Icon name="play" size={22} color={Colors.white} />
          <Text style={styles.buttonText}>Play Trailer</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text>No Trailer</Text>
        </View>
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  buttonGroup: {
    marginBottom: 25,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    marginLeft: 5,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
