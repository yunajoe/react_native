import React, {useState} from 'react';
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import DuplicatedButton from '../components/button/DuplicatedButton';
import {Separator} from '../components/seperator/Seperator';

import {useSelector} from 'react-redux';

import InputError from '@/components/error/InputError';
import NewProfileInput from '@/components/input/NewProfileInput';
import {styles} from '@/styles/screen/new_profile_style';
import {AuthState, UpdateUserState} from '@/types/reducerType';

// 이메일은 변경 x, username이랑, pwd만 바꾸는걸루!
export default function NewProfile() {
  const [userName, setUserName] = useState(''); // 현재 username
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassWorDoubleCheck, setNewPassWordDoubleCheck] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserNameArr, setNewUserNameArr] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState({
    currentPasswordErrorMSG: '',
    newPasswordErrorMSG: [''],
    reNewPasswordErrorMSG: '',
  });

  const [userProfileChanged, setUserProfileChanged] = useState({
    currentPassword: false,
    password: true,
    username: true,
  });

  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  // console.log('NEWPROFILE 컴퍼넌트입니닷', authState);
  const updateUserState = useSelector(
    (state: {updateUserReducer: UpdateUserState}) => state.updateUserReducer,
  );

  // 현재 비밀번호 INPUT관리 함수
  const handleCurrentPassWord = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const {text} = event.nativeEvent;
    const inputCurrentText = text.trim();
  };

  // 새 password를 만드는 함수
  const handleNewPassWord = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const {text} = event.nativeEvent;
    const inputNewPassWord = text.trim();
  };

  // new password를 double check하는 함수
  const handleNewPassWordReCheck = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const {text} = event.nativeEvent;
    const InputNewPWDCheck = text.trim();
  };

  //  handleUserName
  // username이 변경이 됬을때 중복확인을 하면은 setUserProfileChange {..usernma: true를 .. 아니면 false를 return}
  const handleUserName = (event: {nativeEvent: TextInputChangeEventData}) => {
    const {text} = event.nativeEvent;
    const InputUserName = text.trim();
    // 새로 입력한 userName과 기존의 userName이 같다면은(처음에 default로 된 userNAme)

    if (InputUserName === userName) {
      setUserProfileChanged({
        ...userProfileChanged,
        username: true,
      });
      return;
    }
    const lastUserName = newUserNameArr[newUserNameArr.length - 1];
    if (InputUserName !== lastUserName) {
      setUserProfileChanged({
        ...userProfileChanged,
        username: false,
      });
    }
  };

  console.log('현재 비밀번호 입니닷', currentPassword);
  // 닉네임 중복버튼
  const handleDuplicated = async () => {};

  const handleEditButton = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.introductionContainer}>
        <Text>*닉네임 또는 비밀번호만 변경가능합니다(email변경불가)</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.inputLabel}>이메일</Text>
        <TextInput
          style={styles.input}
          value={authState.email}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <NewProfileInput
          label="현재비밀번호"
          inputValue={currentPassword}
          onChange={handleCurrentPassWord}
          onChangeText={setCurrentPassword}
        />
        <InputError errorMessage={errorMessage.currentPasswordErrorMSG} />
      </View>
      <View style={styles.inputContainer}>
        <NewProfileInput
          label="새 비밀번호"
          inputValue={newPassword}
          onChange={handleNewPassWord}
          onChangeText={setNewPassword}
        />
        <InputError
          type="multi"
          errorMessage={errorMessage.currentPasswordErrorMSG}
        />
      </View>
      <View style={styles.inputContainer}>
        <NewProfileInput
          label="새 비밀번호 확인"
          inputValue={newPassWorDoubleCheck}
          onChange={handleNewPassWordReCheck}
          onChangeText={setNewPassWordDoubleCheck}
        />
        <InputError errorMessage={errorMessage.reNewPasswordErrorMSG} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>닉네임</Text>
        <View style={styles.duplicatedButtonContainer}>
          <TextInput
            style={styles.usernameInput}
            value={newUserName}
            onChange={handleUserName}
            onChangeText={setNewUserName}
          />

          <DuplicatedButton
            title="중복확인"
            onPress={handleDuplicated}
            disabled={userName.trim() === newUserName.trim() ? true : false}
          />
        </View>
      </View>
      <Separator />
      <Button title="수정하기" onPress={handleEditButton} />
    </View>
  );
}
