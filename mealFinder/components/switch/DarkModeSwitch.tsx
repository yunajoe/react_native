import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';

type DarkModeSwitchProps = {
  isLight: boolean;
  toggleSwitch: () => void;
};

function DarkModeSwitch({isLight, toggleSwitch}: DarkModeSwitchProps) {
  console.log('isLight', isLight);
  return (
    <View style={styles.switchContainer}>
      <Switch
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={isLight ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isLight}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    // top: 15,
    // right: -80,
    // backgroundColor: 'blue',
  },
});
export default DarkModeSwitch;
