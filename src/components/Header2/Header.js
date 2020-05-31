import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Colors} from '../../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.headerBotom}>
          <TouchableOpacity onPress={() => this.props.onPress()}>
            <Icon name="arrow-left" size={20} color={'salmon'} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Image
              style={{alignSelf: 'flex-end'}}
              source={require('../../assets/icon/logo-tmdb.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingBottom: 10,
    paddingTop: 25,

    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'flex-end',
  },
  headerBotom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Header;
