import {
  removeItemFromStorage,
  saveNonStringItemToStorage,
} from '@/utils/storage';
import {PayloadAction} from '@reduxjs/toolkit';

export type AuthPayload = {
  id: string;
  accessToken: string;
  refreshToken: string;
  email: string;
  username: string;
  password: string;
  status: null | number;
  message: string;

  // kakao
  kakaoId: string;
  kakaoEmail: string;
  kakaoNickName: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
};

export const AuthInitialState = {
  id: '',
  accessToken: null,
  refreshToken: null,
  email: '',
  username: '',
  password: '',
  profileImageUrl: '',
  thumbnailImageUrl: '',
  // login
  loginStatus: null,
  loginMessage: '',
  // logout
  logoutStatus: null,
  logoutMessage: '',
};

export default function authReducer(
  state = AuthInitialState,
  action: PayloadAction<AuthPayload>,
) {
  switch (action.type) {
    case 'LOGIN/pending': {
      return {
        ...state,
      };
    }
    case 'LOGIN/fulfilled': {
      const {
        id,
        username,
        email,
        password,
        accessToken,
        refreshToken,
        status,
        message,
      } = action.payload;
      saveNonStringItemToStorage({
        key: 'user',
        saveValue: {username, email, password},
      });

      return {
        ...state,
        id,
        username,
        email,
        password,
        accessToken,
        refreshToken,
        loginStatus: status,
        loginMessage: message,
      };
    }

    case 'LOGIN/rejected': {
      const {status, message} = action.payload;
      return {
        ...AuthInitialState,
        loginStatus: status,
        loginMessage: message,
      };
    }

    // 카카오 로그인
    case 'KAKAO/LOGIN/pending': {
      return {
        ...state,
      };
    }
    case 'KAKAO/LOGIN/fulfilled': {
      const {
        status,
        message,
        kakaoId,
        kakaoEmail,
        kakaoNickName,
        profileImageUrl,
        thumbnailImageUrl,
        accessToken,
        refreshToken,
      } = action.payload;
      saveNonStringItemToStorage({
        key: 'kakao_user',
        saveValue: {
          kakaoId,
          kakaoNickName,
          kakaoEmail,
          profileImageUrl,
          thumbnailImageUrl,
          accessToken,
          refreshToken,
        },
      });
      return {
        ...state,
        id: kakaoId,
        username: kakaoNickName,
        email: kakaoEmail,
        profileImageUrl,
        thumbnailImageUrl,
        accessToken,
        refreshToken,
        loginStatus: status,
        loginMessage: message,
      };
    }

    case 'KAKAO/LOGIN/rejected': {
      const {status, message} = action.payload;
      return {
        ...AuthInitialState,
        loginStatus: status,
        loginMessage: message,
      };
    }

    case 'LOGOUT/pending': {
      return {
        ...state,
      };
    }
    case 'LOGOUT/fulfilled': {
      const {status, message} = action.payload;
      removeItemFromStorage('user');
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }
    case 'LOGOUT/rejected': {
      const {status, message} = action.payload;
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }

    case 'KAKAO/LOGOUT/pending': {
      return {
        ...state,
      };
    }

    case 'KAKAO/LOGOUT/fulfilled': {
      const {status, message} = action.payload;
      removeItemFromStorage('kakao_user');
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }

    case 'KAKAO/LOGOUT/rejected': {
      const {status, message} = action.payload;
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }

    // reset
    case 'AUTH/reset': {
      return AuthInitialState;
    }

    default:
      return state;
  }
}
