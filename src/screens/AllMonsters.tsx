import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../App';
import ListRenderItem from '../components/all-monsters/ListRenderItem';
import { getAllMonsters } from '../redux/actions';

const AllMonstersScreen: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllMonsters());

    return function cleanup() {
      setQuery('');
    };
  }, []);

  const allMonsters = useSelector((state: RootStore) => state.allMonsters).sort(
    (a, b) => {
      return a.name > b.name ? 1 : -1;
    }
  );

  const renderItem = ({ item }: any) => {
    return (
      <ListRenderItem
        name={item.name}
        img={item.img}
        type={item.type}
        loot={item.loot}
        susceptibility={item.susceptibility}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <ImageBackground
        source={{
          uri: 'https://images.wallpapersden.com/image/download/geralt-of-rivia-the-witcher-3_a2Zuam2UmZqaraWkpJRmZW1lrWdpZWU.jpg',
        }}
        resizeMode='cover'
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        <Text style={styles.headingText}> Bestiary</Text>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder='Search...'
            placeholderTextColor='#333'
            style={styles.searchBar}
            onChangeText={(value: any) => setQuery(value)}
          />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={
              query === ''
                ? allMonsters
                : allMonsters.filter((item) => {
                    return item.name
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
            }
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            style={{ paddingTop: 15, flex: 1 }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    padding: 10,
  },

  flatList: {
    flex: 1,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#111',
  },

  searchBar: {
    padding: 13,
    color: '#111',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: '95%',
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.9)',
  },
});

export default AllMonstersScreen;
