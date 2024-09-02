// dispatch가 필요있는  훅
import {useCallback, useEffect} from 'react';
import {Alert} from 'react-native';

import {loginUser} from '@/redux/action';
import {
  resetAuthCodeStatus,
  resetAuthUser,
  resetDeleteUser,
  resetRegisterUser,
  resetStatus,
  resetUpdateUser,
} from '@/redux/resetAction';
import {useAppDispatch} from '@/redux/store';
import {StackNavigation} from '@/types/navigation';
import {getItemFromStorage} from '@/utils/storage';
import {useNavigation} from '@react-navigation/native';

type UseAlertMessageOptions = {
  state: {message: string; status: number | null};
  actionType: string;
  destination?: string;
  loginInfo?: {email: string; password: string};
};

function useAlertMessage(options: UseAlertMessageOptions) {
  const {state, actionType, destination, loginInfo} = options;

  const email = loginInfo?.email;
  const password = loginInfo?.password;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigation>();

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

  // 로그인
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
  };

  // 변경
  const updateUserCallbackFunc = async () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }

    const data = await getItemFromStorage('user');
    dispatch(loginUser({email: data.email, password: data.password}));
  };

  //  삭제
  const deleteUserCallback = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
  };

  const registerEmailCallback = () => {
    if (state.status == 400) {
      dispatch(resetStatus);
    }
  };

  const authrizationCodeCallback = () => {
    if (destination && state.status === 200) {
      navigation.navigate(destination);
    }
  };

  const handleMessageCallback = useCallback(() => {
    Alert.alert(state.message, '', [
      {
        text: '확인',
        onPress: () => {
          switch (actionType) {
            case 'LOGIN':
              logInCallbackFunc();
              break;
            case 'LOGOUT':
              logOutCallbackFunc();
              break;
            case 'REGISTER/USER':
              registerUserCallbackFunc();
              break;
            case 'UPDATE/USER':
              updateUserCallbackFunc();
              break;
            case 'DELETE/USER':
              deleteUserCallback();
              break;
            case 'REGISTER/EMAIL':
              registerEmailCallback();
            // case 'AUTHRIZATION/CODE':
            //   authrizationCodeCallback();
          }
        },
      },
    ]);
  }, [actionType, state.status, state.message]);

  // alert메세지
  useEffect(() => {
    if (actionType === 'AUTHRIZATION/CODE') {
      if (state.status === 400) {
        console.log('인증번호가 잘못되었땨아~');
        dispatch(resetAuthCodeStatus);
      }
      if (state.status === 200) {
        console.log('인증번호가 맛네여');

        authrizationCodeCallback();
        dispatch(resetStatus);
        return;
      }
    }
    if (actionType === 'REGISTER/EMAIL') {
      if (state.status === 400) {
        handleMessageCallback();
      }
      return;
    }

    if (typeof state.status === 'number' && typeof state.message === 'string') {
      if (state.status === 200 || state.status === 400) {
        handleMessageCallback();
      }
    }
    return () => {
      switch (actionType) {
        case 'LOGIN':
          // dispatch(resetAuthUser);
          // dispatch(resetKaKaoAuthUser);
          break;
        case 'LOGOUT':
          dispatch(resetAuthUser);
          break;
        case 'UPDATE/USER':
          dispatch(resetUpdateUser);
          break;
        case 'DELETE/USER':
          dispatch(resetDeleteUser);
          dispatch(resetAuthUser);
          break;
      }
    };
  }, [state.status, state.message]);
}

export default useAlertMessage;
