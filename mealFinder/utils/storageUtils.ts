// value가 arr에 있는지 check
export const checkValueInStorage = (value: string, arr: string[]) => {
  const trimmedValue = value.trim();
  if (arr.indexOf(trimmedValue) === -1) {
    return true;
  }
  return false;
};

// value를 arr로부터 제거하기
export const deleteValueFromStorage = (value: string, arr: string[]) => {
  const trimmedValue = value.trim();
  const filteredArr = arr.filter(item => item !== trimmedValue);
  return filteredArr;
};
