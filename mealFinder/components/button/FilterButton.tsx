import React from 'react';
import useButton, {useButtonProps} from '../../hooks/useButton';
import {Button, Platform, StyleSheet, View} from 'react-native';

export default function FilterButton(props: useButtonProps) {
  const {title, onPress, ...restProps} = useButton({
    ...props,
  });

  return (
    <View style={styles.button}>
      <Button title={title} onPress={onPress} {...restProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        backgroundColor: 'blue',
      },
    }),
  },
  button: {
    width: '45%',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});
