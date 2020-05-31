import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {loading} from '../../public/redux/actions/auth';
import {Colors} from '../../config/Colors';

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
        <Image
          source={require('../../assets/image/bootsplash_logo.png')}
          style={styles.img}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 20,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  img2: {
    width: '100%',
    height: 60,
  },
});

export default Splash;
