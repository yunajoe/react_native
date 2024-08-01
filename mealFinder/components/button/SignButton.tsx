import React from 'react';
import {Button, View} from 'react-native';
type SignButtonProps = {
  title: string;
  onPress: () => void;
};

function SignButton({title, onPress}: SignButtonProps) {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
}

export default SignButton;
