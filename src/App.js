import React from 'react';
import Navigators from './public/Navigators';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './public/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f4f4f4"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
