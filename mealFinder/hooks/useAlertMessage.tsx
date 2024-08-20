import {useCallback, useEffect} from 'react';
import {Alert} from 'react-native';

import {loginUser} from '@/redux/action';
import {
  resetAuthUser,
  resetDeleteUser,
  resetRegisterUser,
  resetUpdateUser,
} from '@/redux/resetAction';
import {useAppDispatch} from '@/redux/store';
import {getItemFromStorage} from '@/utils/storage';
import {useNavigation} from '@react-navigation/native';

// type
type UseAlertMessageOptions = {
  state: {message: string; status: number | null};
  destination: string;
  actionType: string;
  loginInfo?: {email: string; password: string};
};

function useAlertMessage(options: UseAlertMessageOptions) {
  console.log('userAlert입니당아', options);
  const {state, actionType, destination, loginInfo} = options;
  const email = loginInfo?.email;
  const password = loginInfo?.password;

  const dispatch = useAppDispatch();
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

  // update
  const updateUserCallbackFunc = async () => {
    console.log('나는야 업데이뚜');
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }

    const data = await getItemFromStorage('user');

    // 다시 로그인하기
    dispatch(loginUser({email: data.email, password: data.password}));

    dispatch(resetUpdateUser);
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
