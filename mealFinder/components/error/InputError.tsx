import {styles} from '@/styles/error/input_error_style';
import React from 'react';
import {FlatList, Text} from 'react-native';

type InputErrorProps = {
  errorMessage: string | string[];
  type?: string;
};

function InputError({type, errorMessage}: InputErrorProps) {
  return (
    <>
      {type === 'multi' ? (
        <FlatList
          data={errorMessage}
          renderItem={aaaa => console.log('aaa', aaaa)}
        />
      ) : (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </>
  );
}

export default InputError;
