import React, {Component} from 'react';
import {
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
            <Icon name="bars" size={25} color={Colors.orange} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 10,
    // shadowOffset: {width: 2, height: 2},
    // shadowColor: '#000',
    // shadowRadius: 2,
    // shadowOpacity: 1,
    // elevation: 2,
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
