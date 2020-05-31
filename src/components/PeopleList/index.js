import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../config/Colors';
import List from './List';
import {useDispatch} from 'react-redux';
import {getDataPeople} from '../../public/redux/actions/people';

const PeopleList = ({data, onPress}) => {
  const [page, setPage] = useState(2);
  let [results, setResults] = useState(data.results);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loadMore = async () => {
    if (page < data.total_pages) {
      setLoading(true);
      await dispatch(getDataPeople(page)).then((res) => {
        setTimeout(() => {
          setResults([...results, ...res.value.data.results]);
          setPage(page + 1);
          setLoading(false);
        }, 500);
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        {data ? (
          <FlatList
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              loadMore();
            }}
            data={results}
            renderItem={({item}) => <List data={item} />}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}
        {loading ? <ActivityIndicator size="small" color="#fff" /> : null}
      </View>
    </>
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    flex: 1,
  },
  wrapper: {flexDirection: 'row', padding: 10, justifyContent: 'center'},
  button: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  text: {
    color: Colors.white,
  },
});
