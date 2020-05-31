import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import Header from '../../components/Header';
import PeopleList from '../../components/PeopleList';
import {useDispatch, useSelector} from 'react-redux';
import {getDataPeople} from '../../public/redux/actions/people';

const People = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataPeople} = useSelector((state) => state.people);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPeople = async () => {
      setLoading(true);
      await dispatch(getDataPeople(1)).then(() => setLoading(false));
    };

    getPeople();
  }, [dispatch]);

  const bukaMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <Header onPress={bukaMenu} search={null} />
      <View style={styles.container}>
        {loading ? null : error ? (
          <Text>Error, Plaese try again</Text>
        ) : (
          <PeopleList data={dataPeople} />
        )}
        {loading ? <ActivityIndicator size="large" color="#fff" /> : null}
      </View>
    </>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    paddingHorizontal: 0,
  },
  title: {
    color: Colors.white,
  },
});
