import React from 'react';
import {Text} from 'react-native';

import {styles} from '@/styles/error/input_error_style';

type InputErrorProps = {
  errorMessage: string;
};

function InputError({errorMessage}: InputErrorProps) {
  return <Text style={styles.errorMessage}>{errorMessage}</Text>;
}

export default InputError;
