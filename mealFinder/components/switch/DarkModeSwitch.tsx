import React from 'react';
import {Switch, View} from 'react-native';

type DarkModeSwitchProps = {
  isLight: boolean;
  toggleSwitch: () => void;
};

function DarkModeSwitch({isLight, toggleSwitch}: DarkModeSwitchProps) {
  return (
    <View>
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

export default DarkModeSwitch;
