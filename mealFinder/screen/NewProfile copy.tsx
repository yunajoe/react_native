import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import DuplicatedButton from '../components/button/DuplicatedButton';
import {Separator} from '../components/seperator/Seperator';
// import {readItemFromStorage} from '../utils/storage';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../redux/action';
// import {checkByUserName} from '../utils/api';
import {
  checkPassWordValidation,
  validUserName,
} from '../utils/checkInputValidation';

import {UpdateUserState} from '../types/reducerType';

// 이메일은 변경 x, username이랑, pwd만 바꾸는걸루!
export default function NewProfile() {
  const [email, setEmail] = useState('');
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
  // const {getItem, setItem} = useAsyncStorage('user');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const updateUserState = useSelector(
    (state: {updateUserReducer: UpdateUserState}) => state.updateUserReducer,
  );

  console.log('updateUserState ', updateUserState);

  // 현재 비밀번호 INPUT관리 함수
  // const handleCurrentPassWord = event => {
  //   const {text} = event.nativeEvent;
  //   const inputCurrentText = text.trim();
  //   readItemFromStorage({getItem}).then(data => {
  //     if (data !== null) {
  //       const correctedPWD = data.password;

  //       // 현재 비밀번호에 아무것도 안 쳤을때
  //       if (inputCurrentText.length === 0) {
  //         setErrorMessage({
  //           ...errorMessage,
  //           currentPasswordErrorMSG: '',
  //         });
  //         setUserProfileChanged({
  //           ...userProfileChanged,
  //           currentPassword: false,
  //         });
  //       }
  //       // 현재 비밀번호에 쳤는데 그것이 맞을때!
  //       if (inputCurrentText.length > 0 && inputCurrentText === correctedPWD) {
  //         setErrorMessage({
  //           ...errorMessage,
  //           currentPasswordErrorMSG: '',
  //         });
  //         setUserProfileChanged({
  //           ...userProfileChanged,
  //           currentPassword: true,
  //         });
  //       }

  //       // 현재 비밀번호 쳤는게 그것이 틀렸을떄
  //       if (inputCurrentText.length > 0 && inputCurrentText !== correctedPWD) {
  //         setErrorMessage({
  //           ...errorMessage,
  //           currentPasswordErrorMSG: '현재비밀번호를 다시 한번 확인해주세요',
  //         });
  //         setUserProfileChanged({
  //           ...userProfileChanged,
  //           currentPassword: false,
  //         });
  //       }
  //     }
  //   });
  // };

  // 새 password를 만드는 함수
  // const handleNewPassWord = event => {
  //   const {text} = event.nativeEvent;
  //   const inputNewPassWord = text.trim();
  //   const regexTestResult = checkPassWordValidation(inputNewPassWord);
  //   const regexErrorTextMessage = regexTestResult
  //     ? ''
  //     : '영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합';

  //   // 새 비밀번호를 아무것도 입력안했을때 (즉, 변경하지 않고 원래 기존의 비밀번호를 사용하겠댜)
  //   if (inputNewPassWord.length === 0) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       newPasswordErrorMSG: [''],
  //     });
  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: true,
  //     });
  //   }

  //   // 새 비밀번호를 쳤는데 8자미만일때 (즉, 비밀번호를 변경하려구 할때)
  //   if (inputNewPassWord.length > 0 && inputNewPassWord.length < 8) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       newPasswordErrorMSG: ['8자이상입력해주세요', regexErrorTextMessage],
  //     });

  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: false,
  //     });
  //   }

  //   // 새 비밀번호를 쳤는데 8자 이상일때 (즉, 비밀번호를 변경하려구 할때)
  //   if (inputNewPassWord.length >= 8) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       newPasswordErrorMSG: [regexErrorTextMessage],
  //     });
  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: false,
  //     });
  //   }
  // };

  // new password를 double check하는 함수
  // const handleNewPassWordReCheck = event => {
  //   const {text} = event.nativeEvent;
  //   const InputNewPWDCheck = text.trim();
  //   // console.log('InPutNewPWDCHECK', InputNewPWDCheck);

  //   const newPWD = newPassword.trim();

  //   // 새 비밀번호도 없고, 새 비밀번호확인도 없을때 (기존의 비밀번호를 그대로 쓰겠댜!)
  //   if (newPWD.length === 0 && InputNewPWDCheck.length === 0) {
  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: true,
  //     });
  //   }
  //   // 에러메세지는 새 비밀번호 확인에 아무것도 안쓰면 없다(새 비밀번호가 쓰든 안쓰든)
  //   if (InputNewPWDCheck.length === 0) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       reNewPasswordErrorMSG: '',
  //     });
  //   }

  //   //  새 비밀번호의 길이가0보다 크고 && 새 비밀번호확인의 길이가 0보다 크고  새 비밀번호가 확인이랑 같지않을떄 (비밀번호를 변경하려구 할떄)

  //   if (
  //     newPWD.length > 0 &&
  //     InputNewPWDCheck.length > 0 &&
  //     newPWD !== InputNewPWDCheck
  //   ) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       reNewPasswordErrorMSG: '새로운 비밀번호와 일치하지 않습니다',
  //     });
  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: false,
  //     });
  //   }

  //   //  새 비밀번호의 길이가0보다 크고 && 새 비밀번호확인의 길이가 0보다 크고  새 비밀번호랑 같을때)

  //   if (
  //     newPWD.length > 0 &&
  //     InputNewPWDCheck.length > 0 &&
  //     newPWD === InputNewPWDCheck
  //   ) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       reNewPasswordErrorMSG: '',
  //     });
  //     setUserProfileChanged({
  //       ...userProfileChanged,
  //       password: true,
  //     });
  //   }
  // };

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

  // 닉네임 중복버튼
  const handleDuplicated = async () => {
    const latestUserName = newUserNameArr[newUserNameArr.length - 1]; // 가장 최근 username
    const trimmedUserName = newUserName.trim(); // 새로운 username

    if (!validUserName(trimmedUserName)) {
      Alert.alert('닉네임은 최소 2글자 이상이어야 합니다');
      return;
    }
    if (latestUserName === trimmedUserName) {
      setUserProfileChanged({
        ...userProfileChanged,
        username: true,
      });
      Alert.alert('이미 중복처리된 닉네임입니다 ');
      return;
    }
    if (latestUserName !== trimmedUserName) {
      const result = await fetch(checkByUserName, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: trimmedUserName}),
      });

      const jsonResult = await result.json();
      if (jsonResult.status === 400) {
        setUserProfileChanged({
          ...userProfileChanged,
          username: false,
        });
      }
      if (jsonResult.status === 200) {
        setUserProfileChanged({
          ...userProfileChanged,
          username: true,
        });
        setNewUserNameArr([trimmedUserName]);
      }
      Alert.alert(jsonResult.message);
    }
  };

  const handleEditButton = async () => {
    // 현재 비밀번호가 틀렸을떄!
    if (!userProfileChanged.currentPassword) {
      Alert.alert('현재 비밀번호를 한번 더 확인해주세요 ');
      return;
    }
    // 현재 비밀번호가 맞았을떄!
    if (userProfileChanged.currentPassword) {
      // 1. 닉네임 중복체크안했을떄
      if (!userProfileChanged.username) {
        Alert.alert('닉네임 중복체크를 해주세요');
        return;
      }

      // 2. 비밀번호 중복체크 안했을떄
      if (!userProfileChanged.password) {
        Alert.alert('새로운 비밀번호를 확인해주세요');
        return;
      }

      // 둘다 변경되지 않았을떄! (API X)
      if (userName === newUserName && newPassword.length === 0) {
        Alert.alert('닉네임 또는 password를 변경해주세요');
        return;
      }

      // username만 변겨됬을떄
      if (userName !== newUserName && newPassword.length === 0) {
        dispatch(
          updateUser({
            email: email,
            username: newUserName,
            password: currentPassword,
          }),
        );
      }

      // pwd만 변경됬을떄
      if (userName === newUserName && newPassword.length > 0) {
        if (!checkPassWordValidation(newPassword)) {
          Alert.alert('유요한 비밀번호 형식이 아닙니다');
          return;
        }
        dispatch(
          updateUser({
            email: email,
            username: userName,
            password: newPassword,
          }),
        );
      }

      // 둘다 변경
      if (userName !== newUserName && newPassword.length > 0) {
        if (!checkPassWordValidation(newPassword)) {
          Alert.alert('유요한 비밀번호 형식이 아닙니다');
          return;
        }
        dispatch(
          updateUser({
            email: email,
            username: newUserName,
            password: newPassword,
          }),
        );
      }
    }
  };
  // useAlertMessage({
  //   state: {message: updateUserState.message, status: updateUserState.status},
  //   destination: 'Home',
  //   actionType: 'UPDATE/USER',
  // });

  useEffect(() => {
    readItemFromStorage({getItem}).then(data => {
      if (data !== null) {
        setEmail(data.email);
        setUserName(data.username);
        setNewUserName(data.username);
        setNewUserNameArr([data.username]);
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.introductionContainer}>
        <Text>*닉네임 또는 비밀번호만 변경가능합니다(email변경불가)</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.inputLabel}>이메일</Text>
        <TextInput style={styles.input} value={email} editable={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>현재비밀번호</Text>
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChange={handleCurrentPassWord}
          onChangeText={setCurrentPassword}
        />
        <Text style={styles.errorMessage}>
          {errorMessage.currentPasswordErrorMSG}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>새 비밀번호</Text>

        <TextInput
          style={styles.input}
          value={newPassword}
          onChange={handleNewPassWord}
          onChangeText={setNewPassword}
        />
        <View style={styles.errorMessageContainer}>
          {errorMessage.newPasswordErrorMSG?.map((message, index) => {
            return (
              <Text key={index} style={styles.errorMessage}>
                {message}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>새 비밀번호확인</Text>
        <TextInput
          style={styles.input}
          value={newPassWorDoubleCheck}
          onChange={handleNewPassWordReCheck}
          onChangeText={setNewPassWordDoubleCheck}
        />
        <Text style={styles.errorMessage}>
          {errorMessage.reNewPasswordErrorMSG}
        </Text>
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
      {/* 약관동의서 */}
      {/* <ProfileEditAggrement /> */}
      <Button title="수정하기" onPress={handleEditButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },

  emailContainer: {
    marginBottom: 20,
  },

  // email제외 컨테이너
  inputContainer: {
    marginBottom: 10,
  },

  inputLabel: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  duplicatedButtonContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  usernameInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
  errorMessageContainer: {
    flexDirection: 'column',
    height: 30,
  },
  // errorMsg
  errorMessage: {
    color: 'red',
  },

  newPassWordRegex: {
    marginBottom: 5,
  },

  //
  introductionContainer: {
    padding: 5,
    marginBottom: 10,
    marginTop: 5,
  },
});
