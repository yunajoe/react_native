import {loginUser} from '@/redux/action';
import {
  resetAuthUser,
  resetDeleteUser,
  resetRegisterUser,
} from '@/redux/resetAction';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

// type
type UseAlertMessageOptions = {
  state: {message: string; status: number | null};
  destination: string;
  actionType: string;
  loginInfo?: {email: string; password: string};
};

function useAlertMessage(options: UseAlertMessageOptions) {
  const {state, actionType, destination, loginInfo} = options;
  const email = loginInfo?.email;
  const password = loginInfo?.password;

  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();

  // 회원가입
  const registerUserCallbackFunc = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
    // 자동로그인을 위한것..
    if (email && password) {
      dispatch(loginUser({email, password}));
    }

    dispatch(resetRegisterUser);
  };

  const logInCallbackFunc = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
  };

  // 로그아웃
  const logOutCallbackFunc = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
    dispatch(resetAuthUser);
  };

  const updateUserCallbackFunc = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
    // dispatch(resetUpdateUser);
  };

  const deleteUserCallback = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
    dispatch(resetDeleteUser);
    dispatch(resetAuthUser);
  };
  const handleMessageCallback = useCallback(() => {
    Alert.alert(state.message, '', [
      {
        text: '확인',
        onPress: () => {
          if (actionType === 'LOGIN') {
            logInCallbackFunc();
          }
          if (actionType === 'LOGOUT') {
            logOutCallbackFunc();
          }
          if (actionType === 'REGISTER/USER') {
            registerUserCallbackFunc();
          }
          if (actionType === 'UPDATE/USER') {
            updateUserCallbackFunc();
          }
          if (actionType === 'DELETE/USER') {
            deleteUserCallback();
          }
        },
      },
    ]);
  }, [state.message]);

  // alert메세지
  useEffect(() => {
    if (typeof state.status === 'number' && typeof state.message === 'string') {
      if (state.status === 200 || state.status === 400) {
        handleMessageCallback();
      }
    }
  }, [state.status, state.message]);
}

export default useAlertMessage;
