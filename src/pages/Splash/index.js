import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {loading} from '../../public/redux/actions/auth';

const Splash = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(loading());
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <View style={styles.container}>
        <Text>Hai</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  img: {
    width: '90%',
    height: 90,
  },
});

export default Splash;
