import {PayloadAction} from '@reduxjs/toolkit';

export type ListPayload = {
  status: number;
  message: string;
  result: [];
};

const initialState = {
  subEmailListStatus: null,
  subEmailListMessage: '',
  subEmailArr: [],
};

export default function listReducer(
  state = initialState,
  action: PayloadAction<ListPayload>,
) {
  switch (action.type) {
    case 'SUBEMAIL/LIST/pending': {
      return initialState;
    }
    case 'SUBEMAIL/LIST/fulfilled': {
      const {status, message, result} = action.payload;
      return {
        ...state,
        subEmailListStatus: status,
        subEmailListMessage: message,
        subEmailArr: result,
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
