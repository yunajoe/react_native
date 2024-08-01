import {PayloadAction} from '@reduxjs/toolkit';
import {
  removeItemFromStorage,
  saveNonStringItemToStorage,
} from '../../utils/storage';

export type AuthPayload = {
  id: string;
  accessToken: string;
  refreshToken: string;
  email: string;
  username: string;
  password: string;
  status: null | number;
  message: string;
};

export const AuthInitialState = {
  id: '',
  accessToken: null,
  refreshToken: null,
  email: '',
  username: '',
  password: '',
  // login
  loginStatus: null,
  loginMessage: '',
  // logout
  logoutStatus: null,
  logoutMessage: '',
  // delete
  // deleteStatus: null,
  // deleteMessage: '',
};

export default function authReducer(
  state = AuthInitialState,
  action: PayloadAction<AuthPayload>,
) {
  switch (action.type) {
    case 'LOGIN/pending': {
      console.log('로그인펜딩', action.payload);
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
      console.log('로그인페이로드', action.payload);

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

    // 로그아웃
    case 'LOGOUT/pending': {
      console.log('로그아웃펜딩');
      return {
        ...state,
      };
    }
    case 'LOGOUT/fulfilled': {
      const {status, message} = action.payload;
      console.log('로그아웃 fulfilled', action.payload);

      removeItemFromStorage('user');
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }
    case 'LOGOUT/rejected': {
      console.log('로그아웃 rejected');
      const {status, message} = action.payload;
      return {
        ...AuthInitialState,
        logoutStatus: status,
        logoutMessage: message,
      };
    }
    // reset
    case 'AUTH/reset': {
      console.log('AUTHRESET을합니다앙아');
      return AuthInitialState;
    }

    default:
      return state;
  }
}
