import React from 'react';
import {Button, View} from 'react-native';

type SignButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

function SignButton({title, onPress, disabled = false}: SignButtonProps) {
  return (
    <View>
      <Button title={title} onPress={onPress} disabled={disabled} />
    </View>
  );
}

export default SignButton;
