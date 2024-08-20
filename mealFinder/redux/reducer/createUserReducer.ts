import {saveNonStringItemToStorage} from '../../utils/storage';
import {PayloadAction} from '@reduxjs/toolkit';

export type RegisterPayload = {
  message: string;
  status: number;
  email: string;
  username: string;
  password: string;
};

export const initialState = {
  message: '',
  status: null,
  email: '',
  username: '',
  password: '',
};

export default function createUserReducer(
  state = initialState,
  action: PayloadAction<RegisterPayload>,
) {
  switch (action.type) {
    case 'REGISTER/pending':
      return {
        ...initialState,
        message: 'REGISTER API PENDING중..',
      };
    case 'REGISTER/fulfilled': {
      const {email, username, password, status, message} = action.payload;

      saveNonStringItemToStorage({
        key: 'user',
        saveValue: {email, username, password},
      });

      return {
        ...state,
        status,
        message,
        email,
        username,
        password,
      };
    }

    case 'REGISTER/rejected':
      const {status, message} = action.payload;
      return {
        ...initialState,
        status,
        message,
      };

    case 'REGISTER/reset': {
      return initialState;
    }

    default:
      return state;
  }
}
