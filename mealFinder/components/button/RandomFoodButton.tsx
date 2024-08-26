import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {AllowedMode} from '@/theme';
import {faShuffle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type RandomFoodButtonProps = {
  theme: AllowedMode;
  onPress: () => void;
};

function RandomFoodButton({theme, onPress}: RandomFoodButtonProps) {
  return (
    <TouchableHighlight
      underlayColor="rgba(10, 68, 18, 0.9)"
      style={styles.randomButtonStyle}
      onPress={onPress}>
      <View>
        <FontAwesomeIcon
          icon={faShuffle}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </View>
    </TouchableHighlight>
  );
}

export default RandomFoodButton;

const styles = StyleSheet.create({
  randomButtonStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dedede',
    color: '#fff',
    fontSize: 14,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
