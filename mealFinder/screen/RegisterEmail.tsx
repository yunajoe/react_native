import React, {useEffect, useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import InputError from '@/components/error/InputError';
import VerificationInput from '@/components/input/VerificationInput';
import EditScreenLayout from '@/components/layout/EditScreenLayout';
import EmailList from '@/components/list/EmailList';
import Toast from '@/components/toast/Toast';
import useAlertMessage from '@/hooks/useAlertMessage';
import useTimeOut from '@/hooks/useTimeOut';
import {
  checkNewEmail,
  sendAuthrizationCode,
  sendNewEmail,
} from '@/redux/action';
import {resetAuthrizationStatus} from '@/redux/resetAction';
import {useAppDispatch} from '@/redux/store';
import {AuthState, StatusState} from '@/types/reducerType';
import {
  emailProcessTwo,
  filterMatchText,
  processDomainPart,
  processLocalPart,
} from '@/utils/processing';

function RegisterEmail() {
  const [email, setEmail] = useState('');
  const [authrizationCode, setAuthrizationCode] = useState('');

  const [isSelected, setIsSelected] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isSentCodeButton, setIsSentCodeButton] = useState(false);
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );

  const {
    registerEmailStatus,
    registerEmailMessage,
    sentCodeStatus,
    sentCodeMessage,
    currentTime,
    expiredTime,
  } = statusState;
  const dispatch = useAppDispatch();

  const {remainingTimes} = useTimeOut(currentTime, expiredTime);

  const handlePress = async (email: string) => {
    // 처음 재전송 버튼을 눌렀을떄
    if (!isSentCodeButton) {
      dispatch(checkNewEmail(email));
      setIsSentCodeButton(true);
    }

    // 처음이 아닌 두번째 재전송 버튼을 눌렀을떄
    if (isSentCodeButton) {
      // toast (시간이 아직 안됬기 때문에 인증코드를 못 보낸다)
      if (remainingTimes && remainingTimes >= 290000) {
        setIsToastOpen(true);
        return;
      }

      // 인증코드 다시 보냄
      if (remainingTimes && remainingTimes > 0 && remainingTimes < 290000) {
        dispatch(sendNewEmail(email));
      }
      if (remainingTimes === 0) {
        dispatch(resetAuthrizationStatus);
        dispatch(sendNewEmail(email));
      }
    }
  };

  const handleOnChange = () => {
    setIsSelected(false);
  };

  const disabled = email.length === 0 ? true : false;

  const authrizationDisabled = authrizationCode.length === 0 ? true : false;

  const data = Array.from({length: 8}, (_, i) => {
    return {
      id: i,
      title: `${processLocalPart(email)}@${processDomainPart(i)}`,
    };
  });

  const result = filterMatchText(email);

  const dataTwo = emailProcessTwo(result);

  const borderColor = statusState.registerEmailStatus === 400 ? 'red' : 'gray';

  useAlertMessage({
    state: {
      message: registerEmailMessage,
      status: registerEmailStatus,
    },
    actionType: 'REGISTER/EMAIL',
  });

  useAlertMessage({
    state: {
      message: sentCodeMessage,
      status: sentCodeStatus,
    },
    actionType: 'AUTHRIZATION/CODE',
    destination: 'NewProfile',
  });

  const handleConfirm = async (
    authEmail: string,
    email: string,
    authrizationCode: string,
  ) => {
    dispatch(
      sendAuthrizationCode({
        authEmail: authEmail,
        email: email,
        authcode: authrizationCode,
      }),
    );
  };

  useEffect(() => {
    if (registerEmailStatus === 200) {
      dispatch(sendNewEmail(email));
    }
  }, [registerEmailStatus]);

  return (
    <EditScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>이메일은 최대 3개까지 등록가능합니다</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={[styles.input, {borderColor: borderColor}]}
            value={email}
            onChangeText={setEmail}
            onChange={handleOnChange}
          />

          <Pressable
            style={[
              styles.button,
              {backgroundColor: disabled ? '#a9adb9' : '#e4e6ed'},
            ]}
            disabled={disabled}
            onPress={() => handlePress(email)}>
            <Text>확인</Text>
          </Pressable>
        </View>
        {/* 가능한 이메일인 경우 autoriztion code랑 createTimedlf, expiresTIem다 받아짐. */}
        {registerEmailStatus === 200 && (
          <VerificationInput
            authrizationCode={authrizationCode}
            setAuthrizationCode={setAuthrizationCode}
            email={email}
            handlePress={handlePress}
            remainingTimes={remainingTimes}
          />
        )}

        {registerEmailStatus === 400 && (
          <InputError errorMessage={registerEmailMessage} />
        )}

        {/* data리스트컴퍼넌 */}
        {!isSelected && email.length > 0 && !email.includes('@') && (
          <EmailList
            data={data}
            email={email}
            setEmail={setEmail}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        )}
        {!isSelected &&
          email.length > 0 &&
          email.includes('@') &&
          result?.domain !== '' && (
            <EmailList
              data={dataTwo}
              email={email}
              setEmail={setEmail}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          )}
        {!isSelected &&
          email.length > 0 &&
          email.includes('@') &&
          result?.domain === '' && (
            <EmailList
              data={data}
              email={email}
              setEmail={setEmail}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          )}
      </View>
      <View style={{width: '100%'}}>
        <Button
          title="확인"
          onPress={() =>
            handleConfirm(authState.email, email, authrizationCode)
          }
          disabled={authrizationDisabled}
        />
      </View>

      {/* 유효코드 재발급 Toast */}
      {isToastOpen && (
        <Toast
          message="인증 코드 재발급은 1분이 지나야 가능합니다"
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </EditScreenLayout>
  );
}

export default RegisterEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: 'black',
    padding: 6,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    width: '80%',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
  },
});
