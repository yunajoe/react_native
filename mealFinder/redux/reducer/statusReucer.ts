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
  sentCodeMessage: '',
  sentCodeStatus: null,
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
      return {
        ...state,
      };
    }
    case 'SEND/EMAIL/fulfilled': {
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
      return {
        ...initialState,
      };
    }

    case 'SEND/AUTHCODE/pending': {
      console.log('authddd코dd드 펜ddddddddsdfsdddfddddddd디이잉');
      return {
        ...state,
      };
    }

    case 'SEND/AUTHCODE/fulfilled': {
      console.log('authddddddddddddddddd코ddddddddddddddd드 성고옹잉');

      const {status, message} = action.payload;
      return {
        ...state,
        sentCodeMessage: message,
        sentCodeStatus: status,
      };
    }

    case 'SEND/AUTHCODE/rejected': {
      return {
        ...initialState,
      };
    }

    case 'status/reset':
      return initialState;
    default:
      return state;
  }
}
