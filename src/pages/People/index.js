import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import Header from '../../components/Header';
import PeopleList from '../../components/PeopleList';
import {useDispatch, useSelector} from 'react-redux';
import {getDataPeople, searchPeople} from '../../public/redux/actions/people';

const People = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataPeople} = useSelector((state) => state.people);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [key, setKey] = useState('');

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

  const search = async (keyword) => {
    setKey(keyword);
    if (keyword) {
      setLoading(true);
      await dispatch(searchPeople(keyword, 1)).then(() => setLoading(false));
    } else {
      setLoading(true);
      await dispatch(getDataPeople(1)).then(() => setLoading(false));
    }
  };

  return (
    <>
      <Header onPress={bukaMenu} search={(keyword) => search(keyword)} />
      <View style={styles.container}>
        {loading ? null : error ? (
          <Text style={styles.text}>Error, Plaese try again</Text>
        ) : dataPeople.total_results < 1 ? (
          <Text style={styles.text}>
            Nothing result found with keyword : {key}
          </Text>
        ) : (
          <PeopleList
            data={dataPeople}
            nav={(lokasi) => navigation.navigate(lokasi)}
            keyword={key}
          />
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
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
