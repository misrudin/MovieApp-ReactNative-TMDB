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
import _ from 'lodash';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.Search = _.debounce(this.Search, 1000);
  }

  Search = () => {
    this.props.search(this.state.keyword);
  };

  onChange = (e) => {
    this.setState({keyword: e});
    this.Search();
  };

  clear = () => {
    this.setState({
      keyword: '',
    });
    this.props.search('');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/icon/logo-tmdb.png')}
          style={styles.title}
        />
        <View style={styles.headerBotom}>
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(e) => this.onChange(e)}
              value={this.state.keyword}
            />
            {this.state.keyword ? (
              <TouchableOpacity onPress={() => this.clear()}>
                <Icon name="arrow-left" size={18} color="red" />
              </TouchableOpacity>
            ) : (
              <Icon name="search" size={18} color={Colors.orange} />
            )}
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
    color: Colors.white,
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
    borderWidth: 1,
    borderColor: Colors.lightBlack,

    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 8,
  },
});

export default Header;
