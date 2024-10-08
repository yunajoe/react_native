export const checkValueInStorage = (value: string, arr: string[]) => {
  const trimmedValue = value.trim();
  if (arr.indexOf(trimmedValue) === -1) {
    return true;
  }
  return false;
};

export const deleteValueFromStorage = (value: string, arr: string[]) => {
  const trimmedValue = value.trim();
  const filteredArr = arr.filter(item => item !== trimmedValue);
  return filteredArr;
};
