import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {deleteSearchItem} from '../../redux/searchAction';
import {AuthState, SearchState} from '../../types/reducerType';
import {
  getItemFromStorage,
  saveNonStringItemToStorage,
} from '../../utils/storage';
import {deleteValueFromStorage} from '../../utils/storageUtils';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type ItemProps = {name: string};

function SearchedItem({name}: ItemProps) {
  const dispatch = useDispatch<any>();

  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  const searchState = useSelector(
    (state: {searchReducer: SearchState}) => state.searchReducer,
  );

  const handleDeleteItem = async (selectedItemName: string) => {
    if (searchState.isSelectedDeleteButtonClick) {
      await getItemFromStorage(authState.email).then(async data => {
        const updatedData = deleteValueFromStorage(selectedItemName, data);

        await saveNonStringItemToStorage({
          key: authState.email,
          saveValue: updatedData,
        });
      });

      dispatch(deleteSearchItem(selectedItemName));
    }
  };

  return (
    <Pressable onPress={() => handleDeleteItem(name)} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      {searchState.isSelectedDeleteButtonClick && (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </Pressable>
  );
}

export default SearchedItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1, // Set border width if needed
    borderColor: '#E5E5CB', // Set your desired border color here
    marginRight: 10,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#F6E9B2',
  },
  name: {
    color: '#0A6847',
  },
});
