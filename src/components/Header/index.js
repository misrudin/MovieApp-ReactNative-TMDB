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
        {/* <Text style={styles.title}>TMD</Text> */}
        <Image
          source={require('../../assets/icon/logo-tmdb.png')}
          style={styles.title}
        />
        <View style={styles.headerBotom}>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Search" />
            <Icon name="search" size={16} color={Colors.orange} />
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
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,

    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  },
  title: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
  headerBotom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  search: {
    marginRight: 10,
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 8,

    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 8,
  },
});

export default Header;
