import {PayloadAction} from '@reduxjs/toolkit';

export type StatusPayload = {
  message: string;
  status: number | null;
  currentTime?: number | null;
  expiredTime?: number | null;
};

export const initialState = {
  registerEmailMessage: '',
  registerEmailStatus: null,
  authRizationMesaage: '',
  authRizationStatus: null,
  currentTime: null,
  expiredTime: null,
};

export default function statusReducer(
  state = initialState,
  action: PayloadAction<StatusPayload>,
) {
  switch (action.type) {
    case 'REGISTER/EMAIL/pending': {
      return {
        ...state,
      };
    }
    case 'REGISTER/EMAIL/fulfilled': {
      const {status, message} = action.payload;

      return {
        ...state,
        registerEmailMessage: message,
        registerEmailStatus: status,
      };
    }
    case 'REGISTER/EMAIL/rejected': {
      const {status, message} = action.payload;
      return {
        ...state,
        registerEmailMessage: message,
        registerEmailStatus: status,
      };
    }

    case 'SEND/EMAIL/pending': {
      console.log('Oauth코드 보내기.. pedddnding');
      return {
        ...state,
      };
    }
    case 'SEND/EMAIL/fulfilled': {
      console.log('Oauthddd코드 ddd보내기.. 성고오옹');
      const {status, message, currentTime, expiredTime} = action.payload;

      return {
        ...state,
        authRizationMesaage: message,
        authRizationStatus: status,
        currentTime: currentTime,
        expiredTime: expiredTime,
      };
    }
    case 'SEND/EMAIL/rejected': {
      const {status, message} = action.payload;
      return {
        ...state,
        authRizationMesaage: message,
        authRizationStatus: status,
      };
    }

    case 'status/reset':
      return initialState;
    default:
      return state;
  }
}
