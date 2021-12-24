import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { color } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  route: {
    params: {
      name: string;
      type: string;
      img: string;
      loot: [];
      susceptibility: [];
    };
  };
}

const MonsterScreen: React.FC<IProps> = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <ImageBackground
        source={{
          uri: 'https://images5.alphacoders.com/869/869912.jpg',
        }}
        resizeMode='cover'
        style={{
          paddingTop: 75,
          position: 'absolute',
          left: 0,
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        imageStyle={{
          top: undefined,
          bottom: 400,
        }}
      >
        <View style={styles.monsterImgContainer}>
          <Image
            source={{ uri: route.params.img }}
            style={{ width: 250, height: 250 }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.monsterInfo}>
          <MaterialCommunityIcons name='sword-cross' color='#fff' size={24} />
          <Text style={styles.monsterNameText}>{route.params.name}</Text>
          <Text style={styles.monsterTypeText}>{route.params.type}</Text>
          <View
            style={{
              width: 25,
              height: 5,
              backgroundColor: '#efefef',
              borderRadius: 10,
              marginTop: 10,
            }}
          ></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.card}>
              <Text style={styles.cardTitleText}>
                <MaterialCommunityIcons name='sack' color='#fff' size={24} />
                {' ' + ' Loot drops'}
              </Text>
              <View style={{ marginTop: 10 }}>
                {route.params.loot.map((item) => {
                  return (
                    <Text style={styles.cardText} key={item}>
                      <MaterialCommunityIcons
                        name='gold'
                        color='#efefef'
                        size={12}
                      />
                      {'  ' + item}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitleText}>
                {' '}
                <MaterialCommunityIcons
                  name='bullseye-arrow'
                  color='#efefef'
                  size={24}
                />
                {' ' + ' Susceptibility'}
              </Text>

              <View style={{ marginTop: 10 }}>
                {route.params.susceptibility.map((item) => {
                  return (
                    <Text style={styles.cardText} key={item}>
                      <MaterialCommunityIcons
                        name='sword'
                        color='#efefef'
                        size={12}
                      />
                      {'  ' + item}
                    </Text>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  monsterImgContainer: {
    flex: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  monsterNameText: {
    fontWeight: '700',
    color: '#ffffff',
    fontSize: 24,
  },

  deleteButton: {
    padding: 15,
    borderColor: '#c52828',
    borderWidth: 3,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    borderRadius: 15,
  },

  deleteButtonText: {
    fontWeight: '700',
    color: '#c62828',
  },

  monsterTypeText: {
    color: '#fefefe',
    fontSize: 16,
  },

  monsterInfo: {
    flex: 1,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    overflow: 'hidden',
    marginTop: 15,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#111',
  },

  card: {
    padding: 15,
    margin: 5,
    marginTop: 20,
    backgroundColor: '#222',
    flex: 1,
    borderRadius: 15,
  },

  cardTitleText: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 14,
  },

  cardText: {
    color: '#fefefe',
  },
});

export default MonsterScreen;
