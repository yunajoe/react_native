import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {ThemeContext} from '@/context/ThemeContext';

function Indicator() {
  const {theme} = useContext(ThemeContext);

  const changedColor = theme === 'dark' ? '#3c3c41' : '#2fbe61';

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={changedColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Indicator;
