export const search = (searchValue: string) => ({
  type: 'SEARCHED',
  payload: {
    value: searchValue,
  },
});

export const selectedDeleteFunc = (isClick: boolean) => ({
  type: 'DELETE/SELECTED_BUTTON',
  payload: {
    isSelectedDeleteButtonClick: isClick,
  },
});

export const wholeDeleteFunc = (isClick: boolean) => ({
  type: 'DELETE/WHOLE_BUTTON',
  payload: {
    isWholeDeleteButtonClick: isClick,
  },
});

export const deleteSearchItem = (searchValue: string) => ({
  type: 'DELETE/SEARCHED_ITEM',
  payload: {
    deleteValue: searchValue,
  },
});

export const deleteWholeItem = () => ({
  type: 'DELETE/WHOLE_ITEM',
});

export const deleteReset = () => ({
  type: 'DELETE/RESET',
});
