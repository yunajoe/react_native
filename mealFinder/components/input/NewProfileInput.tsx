import {styles} from '@/styles/input/new_profile_input_style';
import React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

type NewProfileInputProps = {
  label: string;
  inputValue: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText: (text: string) => void;
};

function NewProfileInput({
  label,
  inputValue,
  onChange,
  onChangeText,
}: NewProfileInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChange={onChange}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default NewProfileInput;
