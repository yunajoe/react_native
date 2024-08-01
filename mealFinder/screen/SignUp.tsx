import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {handleCheckByEmail, handleCheckByUserName} from '@/api/check';
import DuplicatedButton from '@/components/button/DuplicatedButton';
import useAlertMessage from '@/hooks/useAlertMessage';
import {registerUser} from '@/redux/action';
import {CreateUserState} from '@/types/reducerType';
import {isAllFieldFilled} from '@/utils/checkField';
import {
  checkPassWordValidation,
  validEmail,
  validUserName,
} from '@/utils/checkInputValidation';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [userNameArr, setUserNameArr] = useState<string[]>([]);
  const [emailArr, setEmailArr] = useState<string[]>([]);

  // 중복체크
  const [isUserNameCheck, setIsUserNameCheck] = useState(false);
  const [isEmailCheck, setIsEmailCheck] = useState(false);

  const dispatch = useDispatch<any>();
  const registerUserState = useSelector(
    (state: {createUserReducer: CreateUserState}) => state.createUserReducer,
  );

  // 리셋하는 펑션
  const emailResetCheckFunc = () => {
    setIsEmailCheck(false);
  };

  const userNameResetCheckFunc = () => {
    setIsUserNameCheck(false);
  };

  // nickname check
  const handleDuplicatedUserNameButton = async () => {
    if (!username.trim().length) {
      Alert.alert('닉네임을 입력해주세요');
      userNameResetCheckFunc();
      return;
    }
    if (!validUserName(username.trim())) {
      Alert.alert('유효한 닉네임이 아닙니다');
      userNameResetCheckFunc();
      return;
    }

    const {status, message} = await handleCheckByUserName(username.trim());
    if (status === 200) {
      setUserNameArr([username.trim()]);
      setIsUserNameCheck(true);
    } else if (status === 400) {
      userNameResetCheckFunc();
    }
    Alert.alert(message);
  };

  // email check
  const handleDuplicatedEmailButton = async () => {
    if (!email.trim().length) {
      Alert.alert('이메일을 입력해주세요');
      emailResetCheckFunc();
      return;
    }

    if (!validEmail(email)) {
      Alert.alert('유효한 이메일 형식이 아닙니다');
      return;
    }

    const {status, message} = await handleCheckByEmail(email.trim());
    if (status === 200) {
      setEmailArr([email.trim()]);
      setIsEmailCheck(true);
    } else if (status === 400) {
      emailResetCheckFunc();
    }

    Alert.alert(message);
  };

  const handleSubmit = async () => {
    const isAllFilled = isAllFieldFilled({
      username,
      email,
      password,
      repassword,
    });

    if (!isAllFilled) return;

    if (!isUserNameCheck) {
      Alert.alert('닉네임 중복 체크를 해주세요');
      return;
    }
    if (!isEmailCheck) {
      Alert.alert('이메일 중복 체크를 해주세요');
      return;
    }

    // 만약 user가 email를 고쳤을경우
    if (username.trim() !== userNameArr[userNameArr.length - 1]) {
      Alert.alert('닉네임 중복 체크를 해주세요');
      return;
    }

    if (email.trim() !== emailArr[emailArr.length - 1]) {
      Alert.alert('이메일 중복 체크를 해주세요');
      return;
    }

    if (!checkPassWordValidation(password.trim())) {
      Alert.alert('유효한 비밀번호 형식이 아닙니다');
      return;
    }

    if (password.trim() !== repassword.trim()) {
      Alert.alert('입력한 비밀번호와 다릅니다');
      return;
    }

    if (password.trim() === repassword.trim()) {
      dispatch(registerUser({username, email, password}));
    }
  };

  useAlertMessage({
    state: {
      message: registerUserState.message,
      status: registerUserState.status,
    },
    destination: 'Home',
    actionType: 'REGISTER/USER',
    loginInfo: {
      email: registerUserState.email!,
      password: registerUserState.password!,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.doubleCheckContainer}>
          <TextInput
            style={[styles.input, styles.doubleCheckInput]}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
          />
          <DuplicatedButton
            title="중복확인"
            onPress={handleDuplicatedUserNameButton}
            color="#10380c"
          />
        </View>
        <View style={styles.doubleCheckContainer}>
          <TextInput
            style={[styles.input, styles.doubleCheckInput]}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />

          <DuplicatedButton
            title="중복확인"
            onPress={handleDuplicatedEmailButton}
            color="#10380c"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="repassword"
          value={repassword}
          onChangeText={setRePassword}
        />
      </View>
      <Button title="회원가입하기" onPress={handleSubmit} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  doubleCheckInput: {
    flex: 1, // Input이 남은공간을 다 차지한다
    marginRight: 10,
  },
  doubleCheckContainer: {
    flexDirection: 'row',
  },
});
