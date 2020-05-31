import React, {useState} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import List from './List';
import {useDispatch} from 'react-redux';
import {
  getDataPeople,
  searchPeople,
  getDetailPeople,
  getCastPeople,
} from '../../public/redux/actions/people';

const PeopleList = ({data, onPress, keyword, nav}) => {
  const [page, setPage] = useState(2);
  let [results, setResults] = useState(data.results);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();

  const loadMore = async () => {
    if (!keyword) {
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
    } else {
      if (page < data.total_pages) {
        setLoading(true);
        await dispatch(searchPeople(keyword, page)).then((res) => {
          setTimeout(() => {
            setResults([...results, ...res.value.data.results]);
            setPage(page + 1);
            setLoading(false);
          }, 500);
        });
      }
    }
  };

  const openDetail = async (id) => {
    setLoading2(true);
    await dispatch(getDetailPeople(id)).then(async () => {
      await dispatch(getCastPeople(id)).then(() => {
        nav('DetailPeople');
        setLoading2(false);
      });
    });
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
            renderItem={({item}) => (
              <List data={item} onPress={(id) => openDetail(id)} />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}
        {loading ? <ActivityIndicator size="small" color="#fff" /> : null}
      </View>
      {loading2 ? (
        <ActivityIndicator size="large" style={styles.loading} color="#fff" />
      ) : null}
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
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
});
