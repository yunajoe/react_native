import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import AuthrizationCodeTimer from '@/components/timer/AuthrizationCodeTimer';
import {convertDateFormat} from '@/utils/processing';

type VerificationInputProps = {
  authrizationCode: string;
  setAuthrizationCode: React.Dispatch<React.SetStateAction<string>>;
  currentTime: number;
  expiredTime: number;
};

function VerificationInput({
  authrizationCode,
  setAuthrizationCode,
  currentTime,
  expiredTime,
}: VerificationInputProps) {
  const {formatMinutes, formatSeconds} = convertDateFormat(
    currentTime,
    expiredTime,
  );

  const handlePress = () => {};

  // useEffect(() => {
  //   let timerId = setTimeout(() => {
  //     Alert.alert('하이이');
  //   }, 2000);
  //   return () => {
  //     console.log('지워져랏');
  //     clearTimeout(timerId);
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="숫자 4자리"
        style={styles.input}
        maxLength={4}
        value={authrizationCode}
        onChangeText={setAuthrizationCode}
      />
      {/* <AuthrizationCodeTimer
        formatMinutes={formatMinutes}
        formatSeconds={formatSeconds}
      /> */}
      <AuthrizationCodeTimer
        currentTime={currentTime}
        expiredTime={expiredTime}
      />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text>재전송</Text>
      </Pressable>
    </View>
  );
}

export default VerificationInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
  },
  button: {
    position: 'absolute',
    width: '18%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    right: 10,
    top: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
