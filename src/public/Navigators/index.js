import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {Colors} from '../../config/Colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Home from '../../pages/Home';
import Movie from '../../pages/Movie';
import TvShows from '../../pages/TvShows';
import People from '../../pages/People';
import Splash from '../../pages/Splash';
import TvDetail from '../../pages/TvDetail';
import Detail from '../../pages/Detail';

const Navigators = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType={isLargeScreen ? 'permanent' : 'back'}
        overlayColor="transparent"
        drawerStyle={[
          {
            backgroundColor: Colors.black,
            width: 240,
            justifyContent: 'center',
            paddingVertical: '10%',
          },
          isLargeScreen ? null : {width: '60%'},
        ]}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: '#acacac',
          inactiveBackgroundColor: '#393534',
        }}
        drawerPosition="right">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Movie"
          component={Movie}
          options={{
            drawerLabel: 'Movies',
            drawerIcon: ({color, size}) => (
              <Icon name="movie" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tv Shows"
          component={TvShows}
          options={{
            drawerLabel: 'Tv Shows',
            drawerIcon: ({color, size}) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="People"
          component={People}
          options={{
            drawerLabel: 'Peoples',
            drawerIcon: ({color, size}) => (
              <Icon name="label" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const AuthNav = () => {
  const {loading} = useSelector((state) => state.auth);

  if (loading) {
    return <Splash />;
  }

  return (
    <>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Home"
            component={Navigators}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TvDetail"
            component={TvDetail}
            options={{headerShown: false}}
          />
        </>
      </Stack.Navigator>
    </>
  );
};

export default AuthNav;
