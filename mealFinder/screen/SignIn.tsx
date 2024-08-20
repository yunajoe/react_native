import useAlertMessage from '@/hooks/useAlertMessage';
import {loginUser} from '@/redux/action';
import {StackNavigation} from '@/types/navigation';
import {AuthState} from '@/types/reducerType';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  NativeModules,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const KaKaoModule = NativeModules.KaKaoModule;

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch<any>();
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const submit = () => {
    if (email.trim().length === 0) {
      Alert.alert('email을 입력해주세요');
      return;
    }
    if (password.trim().length === 0) {
      Alert.alert('password를 입력해주세요');
      return;
    }
    dispatch(loginUser({email, password}));
  };

  useAlertMessage({
    state: {message: authState.loginMessage, status: authState.loginStatus},
    destination: 'Home',
    actionType: 'LOGIN',
  });

  // 소셜 로그인
  const handleKaKaoLogin = () => {
    console.log('KaKaoModule', KaKaoModule.add, KaKaoModule.getKaKaoLogin);
    KaKaoModule.add(1, 10, (sum: number) => {
      console.log('나는야합', sum);
    });
    KaKaoModule.getKaKaoLogin();
  };
  const handleGoogleLogin = () => {};

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.loginButton}>
          <Button title="로그인" onPress={submit} />
        </View>
        <View style={styles.socialLoginContainer}>
          {/* source={{uri: strMealThumb}} */}
          {/* <View>
            <Image source={KaKaoImage} />
          </View> */}

          <Button
            title="카카오로로그인하기"
            onPress={handleKaKaoLogin}
            color="#FFBC00"
          />
          <Button title="구글로로그인하기" onPress={handleGoogleLogin} />
        </View>
        <Button
          title="회원가입"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </>
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
  loginButton: {
    marginBottom: 20,
  },
  loginStatus: {
    flexDirection: 'row',
  },
  loginFindContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    columnGap: 10,
  },
  loginFind: {
    width: 150,

    borderWidth: 2, // 테두리 두께
    borderColor: 'orange', // 테두리 색상
    textAlign: 'center',
  },
  socialLoginContainer: {
    marginBottom: 20,
    rowGap: 5,
  },

  // kakao 이미지
  kakaoImage: {
    // width: 132,
    // height: 132,
    // borderRadius: 100,
    overflow: 'hidden',
    height: 37,
    marginBottom: 10,
  },
});
