import React from 'react';
import {StyleSheet, Text} from 'react-native';

import FadeOut from '@/components/style/FadeOut';

type ToastProps = {
  message: string;
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toast({message, setIsToastOpen}: ToastProps) {
  return (
    <FadeOut
      setIsToastOpen={setIsToastOpen}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        borderRadius: 2,
        padding: 16,
        position: 'absolute',
        zIndex: 1,
        bottom: '50%',
        backgroundColor: '#333',
      }}>
      <Text style={styles.text}>{message}</Text>
    </FadeOut>
  );
}

export default Toast;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 2,
    padding: 16,
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    bottom: 30,
  },

  text: {
    color: 'white',
  },
});
