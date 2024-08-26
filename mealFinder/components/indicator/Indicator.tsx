import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {ThemeContext} from '@/context/ThemeContext';

function Indicator() {
  const {theme} = useContext(ThemeContext);

  const changedColor = theme === 'dark' ? '#38724e' : '#171a18';

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={changedColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
});

export default Indicator;
