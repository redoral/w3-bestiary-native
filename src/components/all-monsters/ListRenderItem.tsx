import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface IProps {
  name: string;
  type: string;
  img: string;
}

const ListRenderItem: React.FC<IProps> = ({ name, img, type }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View
        style={{
          backgroundColor: '#',
          overflow: 'hidden',
          borderRadius: 50,
        }}
      >
        <Image
          source={{
            uri: 'https://static.wikia.nocookie.net/witcher/images/0/07/Tw3_journal_bear.png/revision/latest/scale-to-width-down/350?cb=20160304204324',
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
    padding: 10,
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    flexDirection: 'row',
  },

  nameText: {
    color: '#ffffff',
    marginLeft: 10,
    fontWeight: '700',
  },

  typeText: {
    color: '#fefefe',
    marginLeft: 10,
  },
});

export default ListRenderItem;
