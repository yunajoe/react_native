import React from 'react';
import {StyleSheet, View} from 'react-native';

import {images} from '../utils/processing';
import Dot from './style/Dot';

type Props = {
  paginationIndex: number;
};
const Pagination = ({paginationIndex}: Props) => {
  return (
    <View style={styles.container}>
      {images.map((_, index) => {
        return (
          <Dot index={index} key={index} paginationIndex={paginationIndex} />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
