import {AuthState} from '@/types/reducerType';
import {getItemFromStorage, saveNonStringItemToStorage} from '@/utils/storage';
import {checkValueInStorage} from '@/utils/storageUtils';

export const saveSearchedValue = async (
  authState: AuthState,
  searchedValue: string,
) => {
  const searchValue = searchedValue.trim();
  if (authState.email !== '') {
    const userData = await getItemFromStorage(authState.email);
    if (userData === null) {
      await saveNonStringItemToStorage({
        key: authState.email,
        saveValue: [searchValue],
      });
    } else {
      const result = checkValueInStorage(searchValue, userData);
      if (result && searchValue.length > 0) {
        const updatedData = [...userData, searchValue];
        await saveNonStringItemToStorage({
          key: authState.email,
          saveValue: updatedData,
        });
      }
    }
  }
};
