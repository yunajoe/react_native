import {checkValueInStorage} from '../../utils/storageUtils';
import {PayloadAction} from '@reduxjs/toolkit';

// 이것은 argument같은거
export type SearchPayload = {
  value?: string;
  isSelectedDeleteButtonClick?: boolean;
  isWholeDeleteButtonClick?: boolean;
  deleteValue?: string;
  deleteWholeValue?: boolean;
};

export const initialState = {
  insertSearchItemArr: [],
  deletedSearchedItemArr: [],
  isSelectedDeleteButtonClick: false,
  isWholeDeleteButtonClick: false,
  isWholeItemDelete: false,
};

export default function searchReducer(
  state = initialState,
  action: PayloadAction<SearchPayload>,
) {
  const {payload} = action;

  switch (action.type) {
    case 'SEARCHED':
      const trimmedPayLoad = payload.value?.trim()!;

      const result = checkValueInStorage(
        trimmedPayLoad,
        state.insertSearchItemArr,
      );
      if (result) {
        return {
          ...state,
          insertSearchItemArr: [...state.insertSearchItemArr, trimmedPayLoad],
        };
      }
      return {
        ...state,
      };
    case 'DELETE/SELECTED_BUTTON':
      return {
        ...state,
        isSelectedDeleteButtonClick: payload.isSelectedDeleteButtonClick,
      };
    case 'DELETE/WHOLE_BUTTON':
      return {
        ...state,
        isWholeDeleteButtonClick: payload.isWholeDeleteButtonClick,
      };

    case 'DELETE/SEARCHED_ITEM':
      const trimmedDeletedValue = payload.deleteValue?.trim();
      return {
        ...state,
        deletedSearchedItemArr: [
          ...state.deletedSearchedItemArr,
          trimmedDeletedValue,
        ],
      };

    case 'DELETE/WHOLE_ITEM':
      return {
        ...state,
        isWholeItemDelete: true,
      };

    case 'DELETE/RESET':
      return initialState;

    default:
      return state;
  }
}
