import AsyncStorage from '@react-native-async-storage/async-storage';

type saveStringItemToStorage = {
  key: string;
  value: string;
};
type saveItemToStorage = {
  key: string;
  saveValue: any;
};

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

export const removeItemFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  getItemFromStorage,
  saveStringItemToStorage,
  saveNonStringItemToStorage,
  removeItemFromStorage,
};
