import {Alert} from 'react-native';

type isAllFieldFilledTypes = {
  username: string;
  email: string;
  password: string;
  repassword: string;
};

// 빈값이 아닌것만 check하는 함수
export const isAllFieldFilled = ({
  username,
  email,
  password,
  repassword,
}: isAllFieldFilledTypes) => {
  const trimedUsername = username.trim();
  const trimedEmail = email.trim();
  const trimedPassword = password.trim();
  const trimedRePassword = repassword.trim();
  if (!trimedUsername.length) {
    Alert.alert('username을 채워주세요');
    return false;
  }
  if (!trimedEmail.length) {
    Alert.alert('email을 채워주세요');
    return false;
  }
  if (!trimedPassword.length) {
    Alert.alert('password을 채워주세요');
    return false;
  }
  if (!trimedRePassword.length) {
    Alert.alert('repassword을 채워주세요');
    return false;
  }

  return true;
};
