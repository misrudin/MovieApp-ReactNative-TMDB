import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBotom}>
          <View style={styles.title}>
            <Image source={require('../../assets/icon/logo-tmdb.png')} />
          </View>
          <TouchableOpacity onPress={() => this.props.onPress()}>
            <Icon name="bars" size={25} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingHorizontal: 16,
    paddingBottom: 10,
    paddingTop: 25,
  },
  title: {
    alignSelf: 'center',
    flex: 1,
    marginRight: 10,
  },
  headerBotom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Header;
