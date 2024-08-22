import {removeItemFromStorage} from '@/utils/storage';
import {PayloadAction} from '@reduxjs/toolkit';

export type DeletePayload = {
  status: number;
  message: string;
};

const initialState = {
  deleteUserStatus: null,
  deleteUserMessage: '',
};

export default function deleteUserReducer(
  state = initialState,
  action: PayloadAction<DeletePayload>,
) {
  switch (action.type) {
    case 'DELETE/pending': {
      return initialState;
    }
    case 'DELETE/fulfilled': {
      const {status, message} = action.payload;
      removeItemFromStorage('user');
      return {
        ...state,
        deleteUserStatus: status,
        deleteUserMessage: message,
      };
    }

    case 'DELETE/rejected': {
      return initialState;
    }

    case 'DELETE/reset': {
      return initialState;
    }

    default:
      return state;
  }
}
