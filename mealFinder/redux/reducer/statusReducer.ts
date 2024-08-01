import {PayloadAction} from '@reduxjs/toolkit';

export type StatusPayload = {
  loginStatus: null;
  loginMessage: string;
};

export const StatusInitialState = {
  loginStatus: null,
  loginMessage: '',
};

export default function statusReducer(
  state = StatusInitialState,
  action: PayloadAction<StatusPayload>,
) {
  switch (action.type) {
    case 'STATUS/login': {
      console.log(
        'STATUS/LOGIN입니다아아아아앙아아아아아아앙아',
        action.payload,
      );
      return {};
    }
    default:
      return state;
  }
}
