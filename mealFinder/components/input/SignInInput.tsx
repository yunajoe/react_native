import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type SignInInputProps = {
  value: string;
  placeholder: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
};

function SignInInput({value, placeholder, onChangeText}: SignInInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default SignInInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
