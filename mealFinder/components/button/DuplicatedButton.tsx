import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import useButton, {useButtonProps} from '../../hooks/useButton';

export default function DuplicatedButton(props: useButtonProps) {
  const {title, onPress, ...restProps} = useButton({
    ...props,
  });

  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress} {...restProps} />
    </View>
  );
}

// 왜 안 먹힘?
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
