import {PayloadAction} from '@reduxjs/toolkit';

export type StatusPayload = {
  message: string;
  status: number | null;
};

export const initialState = {
  registerEmailMessage: '',
  registerEmailStatus: null,
};

export default function statusReducer(
  state = initialState,
  action: PayloadAction<StatusPayload>,
) {
  switch (action.type) {
    case 'REGISTER/EMAIL/pending': {
      console.log('이메일 등록 펜딩중');
      return {
        ...state,
      };
    }
    case 'REGISTER/EMAIL/fulfilled': {
      console.log('이메일 등록 성고옹ㅇ');
      const {status, message} = action.payload;

      return {
        ...state,
        registerEmailMessage: message,
        registerEmailStatus: status,
      };
    }
    case 'REGISTER/EMAIL/rejected':
      const {status, message} = action.payload;
      return {
        ...state,
        registerEmailMessage: message,
        registerEmailStatus: status,
      };

    case 'status/reset':
      return initialState;
    default:
      return state;
  }
}
