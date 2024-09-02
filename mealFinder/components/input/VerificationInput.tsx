import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import InputError from '@/components/error/InputError';
import AuthrizationCodeTimer from '@/components/timer/AuthrizationCodeTimer';
import useTimeOut from '@/hooks/useTimeOut';
import {StatusState} from '@/types/reducerType';

type VerificationInputProps = {
  authrizationCode: string;
  setAuthrizationCode: React.Dispatch<React.SetStateAction<string>>;
  currentTime: number;
  expiredTime: number;
  email: string;
  handlePress: (email: string) => void;
};

function VerificationInput({
  authrizationCode,
  setAuthrizationCode,
  currentTime,
  expiredTime,
  email,
  handlePress,
}: VerificationInputProps) {
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );
  const {authRizationStatus} = statusState;

  const {remainingTimes} = useTimeOut(currentTime, expiredTime);

  console.log('veerifactionInput컴퍼넌트', remainingTimes, authRizationStatus);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="숫자 4자리"
        style={styles.input}
        maxLength={4}
        value={authrizationCode}
        onChangeText={setAuthrizationCode}
      />

      <AuthrizationCodeTimer remainingTimes={remainingTimes} />
      <Pressable style={styles.button} onPress={() => handlePress(email)}>
        <Text>재전송</Text>
      </Pressable>
      {/* 인증번호 다시 받기 에러 메시지 */}
      {remainingTimes === 0 && authRizationStatus === 200 && (
        <InputError errorMessage="인증번호를 다시 한번 받아주세요" />
      )}
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
