import React from 'react';
import {StyleSheet, Text} from 'react-native';

import FadeOut from '@/components/style/FadeOut';

type ToastProps = {
  message: string;
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toast({message, setIsToastOpen}: ToastProps) {
  console.log('나는토수우수');
  return (
    <FadeOut
      setIsToastOpen={setIsToastOpen}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        padding: 16,
        borderRadius: 2,
        position: 'absolute',
        top: '30%',
        left: '10%',

        backgroundColor: '#333',
      }}>
      <Text style={styles.text}>{message}</Text>
    </FadeOut>
  );
}

export default Toast;
const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
