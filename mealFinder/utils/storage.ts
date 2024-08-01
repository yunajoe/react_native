import AsyncStorage from '@react-native-async-storage/async-storage';

type saveStringItemToStorage = {
  key: string;
  value: string;
};
type saveItemToStorage = {
  key: string;
  saveValue: any;
};

// get
export const getItemFromStorage = async (key: string) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

//save
export const saveStringItemToStorage = async ({
  key,
  value,
}: saveStringItemToStorage) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
};

export const saveNonStringItemToStorage = async ({
  key,
  saveValue,
}: saveItemToStorage) => {
  const value = JSON.stringify(saveValue);
  await saveStringItemToStorage({key, value});
};

// remove
export const removeItemFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

// 해당 아이템이 이미 스토리지에 있는지 double check

export default {
  getItemFromStorage,
  saveStringItemToStorage,
  saveNonStringItemToStorage,
  removeItemFromStorage,
};

//
