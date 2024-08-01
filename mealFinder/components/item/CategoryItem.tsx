import React from 'react';
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';

type CategoryItem = {
  item: string;
  sameIndexFunc: (event: GestureResponderEvent) => void;
  differentIndexFunc: (index: number, item: string) => void;
  index: number;
  selectedIndex: number;
};

export default function CategoryItem({
  item,
  sameIndexFunc,
  differentIndexFunc,
  index,
  selectedIndex,
}: CategoryItem) {
  if (index === selectedIndex) {
    return (
      <Text style={[styles.item, styles.selectedItem]} onPress={sameIndexFunc}>
        {item}
      </Text>
    );
  }
  return (
    <View>
      <Text style={styles.item} onPress={() => differentIndexFunc(index, item)}>
        {item}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1, // border 두께
    borderColor: 'black', // border 색상

    padding: 5,
    marginRight: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,

    color: 'black',
  },
  selectedItem: {
    backgroundColor: '#B6C4B6',
    color: 'white',
    borderColor: '#436850',
  },
});
