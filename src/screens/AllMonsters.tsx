import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../App';
import ListRenderItem from '../components/all-monsters/ListRenderItem';
import { getAllMonsters } from '../redux/actions';

const AllMonstersScreen: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllMonsters());
  }, []);

  const allMonsters = useSelector((state: RootStore) => state.allMonsters).sort(
    (a, b) => {
      return a.name > b.name ? 1 : -1;
    }
  );

  const renderItem = ({ item }: any) => {
    return <ListRenderItem name={item.name} img={item.img} type={item.type} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpaperaccess.com/full/2812342.jpg',
        }}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Text style={styles.headingText}>All monsters</Text>
        <TextInput
          placeholder='Search...'
          placeholderTextColor='#fefefe'
          style={styles.searchBar}
        />
        <View style={styles.flatList}>
          <FlatList
            data={allMonsters}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            style={{ paddingTop: 15 }}
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
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#111',
  },

  searchBar: {
    padding: 10,
    color: '#fff',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 370,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
});

export default AllMonstersScreen;
