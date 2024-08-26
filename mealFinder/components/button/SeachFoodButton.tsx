import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

import {AllowedMode} from '@/theme';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type SeachButtonProps = {
  theme: AllowedMode;
  onPress: () => void;
};

function SeachFoodButton({theme, onPress}: SeachButtonProps) {
  return (
    <TouchableHighlight
      underlayColor="rgba(10, 68, 18, 0.9)"
      style={styles.button}
      onPress={onPress}>
      <View>
        <FontAwesomeIcon
          icon={faSearch}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </View>
    </TouchableHighlight>
  );
}

export default SeachFoodButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#dedede',
    color: '#fff',
    fontSize: 14,
    padding: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
