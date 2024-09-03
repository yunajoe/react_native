import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import InputError from '@/components/error/InputError';
import AuthrizationCodeTimer from '@/components/timer/AuthrizationCodeTimer';
import {StatusState} from '@/types/reducerType';

type VerificationInputProps = {
  authrizationCode: string;
  setAuthrizationCode: React.Dispatch<React.SetStateAction<string>>;

  email: string;
  handlePress: (email: string) => void;
  remainingTimes: number | null;
};

function VerificationInput({
  authrizationCode,
  setAuthrizationCode,

  email,
  handlePress,
  remainingTimes,
}: VerificationInputProps) {
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );
  const {authRizationStatus} = statusState;

  const borderColor =
    remainingTimes === 0 && authRizationStatus === 200 ? 'red' : 'gray';
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="숫자 4자리"
        style={[
          styles.input,
          {
            borderColor: borderColor,
          },
        ]}
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
