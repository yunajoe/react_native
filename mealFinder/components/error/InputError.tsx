import React from 'react';
import {StyleSheet, Text} from 'react-native';

type InputErrorProps = {
  errorMessage: string;
};

function InputError({errorMessage}: InputErrorProps) {
  return <Text style={styles.errorMessage}>{errorMessage}</Text>;
}

export default InputError;

export const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
});
