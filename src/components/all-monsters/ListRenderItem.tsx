import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface IProps {
  name: string;
  type: string;
  img: string;
}

const ListRenderItem: React.FC<IProps> = ({ name, img, type }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('Monster')}
    >
      <View
        style={{
          backgroundColor: '#222',
          overflow: 'hidden',
          borderRadius: 50,
          marginLeft: 5,
        }}
      >
        <Image
          source={{
            uri: img,
          }}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode='contain'
        />
      </View>
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    flexDirection: 'row',
  },

  nameText: {
    color: '#ffffff',
    marginLeft: 15,
    fontWeight: '700',
  },

  typeText: {
    color: '#fefefe',
    marginLeft: 15,
  },
});

export default ListRenderItem;
