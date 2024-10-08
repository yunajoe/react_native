import {PayloadAction} from '@reduxjs/toolkit';

export type UpdatePayload = {
  message: string;
  status: number | null;
};

export const initialState = {
  updateUserNameMessage: '',
  updateUserNameStatus: null,
};

export default function updateUserReducer(
  state = initialState,
  action: PayloadAction<UpdatePayload>,
) {
  switch (action.type) {
    case 'UPDATE/USERNAME/pending': {
      return {
        ...state,
      };
    }
    case 'UPDATE/USERNAME/fulfilled': {
      const {status, message} = action.payload;

      return {
        ...state,
        updateUserNameMessage: message,
        updateUserNameStatus: status,
      };
    }
    case 'UPDATE/rejected':
      const {status, message} = action.payload;
      return {
        ...state,
        updateUserNameMessage: message,
        updateUserNameStatus: status,
      };

    case 'UPDATE/reset':
      return initialState;
    default:
      return state;
  }
}
