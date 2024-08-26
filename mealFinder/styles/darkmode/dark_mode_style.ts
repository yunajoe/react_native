import {StyleSheet} from 'react-native';

import {AllowedMode, Colors} from '@/theme';

export const darkModeStyling = (theme: AllowedMode) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme]?.themeColor,
      height: '100%',
    },
    appTitle: {
      textAlign: 'center',
      fontWeight: '900',
      color: Colors[theme]?.appTitle,
      fontSize: 30,
      marginBottom: 10,
    },
    title: {
      color: Colors[theme]?.appTitle,
      textAlign: 'center',
      fontSize: 20,
    },
  });
};
