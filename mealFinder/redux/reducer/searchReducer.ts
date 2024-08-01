import {PayloadAction} from '@reduxjs/toolkit';
import {checkValueInStorage} from '../../utils/storageUtils';

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
  // {"payload": {"value": "aaaa"}, "type": "SEARCHED"}
  // {"payload": {"isClick": true}, "type": "DELETE/SEARCHED_KEYWORD"}
  switch (action.type) {
    case 'SEARCHED':
      const trimmedPayLoad = payload.value?.trim()!;
      // storage에 있는지 없는지 확인( check for duplication)
      // true이면은 없는거 , false이면은 있는거
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
