import React from 'react';
import {Switch, View} from 'react-native';

import useDarkMode from '@/hooks/useDarkMode';

function DarkModeSwitch() {
  const {isLight, toggleSwitch, theme, setToggleFunction} = useDarkMode();

  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={theme === 'light' ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isLight}
      />
    </View>
  );
}

export default DarkModeSwitch;
