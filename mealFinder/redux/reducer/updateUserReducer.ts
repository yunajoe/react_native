import {PayloadAction} from '@reduxjs/toolkit';
import {saveNonStringItemToStorage} from '../../utils/storage';

export type UpdatePayload = {
  message: string;
  status: number | null;
  email?: string;
  username?: string;
  password?: string;
};

export const initialState = {
  loading: true,
  message: '',
  status: null,
};

export default function updateUserReducer(
  state = initialState,
  action: PayloadAction<UpdatePayload>,
) {
  // payload는 api return값이댜
  const {payload} = action;

  switch (action.type) {
    case 'UPDATE/pending':
      return {
        ...state,
        loading: true,
        message: 'Pending중입니다',
        status: 202,
      };
    case 'UPDATE/fulfilled': {
      const {email, password, username} = action.payload;

      saveNonStringItemToStorage({
        key: 'user',
        saveValue: {email, username, password},
      });

      return {
        ...state,
        loading: false,
        message: payload.message,
        status: payload.status,
        email,
        password,
        username,
      };
    }
    case 'UPDATE/rejected':
      return {
        ...state,
        loading: false,
        message: payload.message,
        status: payload.status,
      };

    case 'UPDATE/reset':
      return initialState;
    default:
      return state;
  }
}
