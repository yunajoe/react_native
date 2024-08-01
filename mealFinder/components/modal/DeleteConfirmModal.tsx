import React from 'react';

import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteReset,
  deleteWholeItem,
  wholeDeleteFunc,
} from '../../redux/searchAction';
import {AuthState} from '../../types/reducerType';
import {
  getItemFromStorage,
  saveNonStringItemToStorage,
} from '../../utils/storage';

type DeleteConfirmModalProps = {
  onClose: () => void;
};

export default function DeleteConfirmModal({onClose}: DeleteConfirmModalProps) {
  const dispatch = useDispatch<any>();
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const handleDeleteWholeItem = async () => {
    await getItemFromStorage(authState.email).then(async () => {
      await saveNonStringItemToStorage({
        key: authState.email,
        saveValue: [],
      });
    });

    dispatch(wholeDeleteFunc(false));
    dispatch(deleteWholeItem());
    dispatch(deleteReset());
  };

  const handleApprove = async () => {
    console.log('delete storgae실행 !');
    await handleDeleteWholeItem();
    console.log('dispatch와 onClose함수실행');

    onClose();
  };

  const handleDecline = () => {
    dispatch(wholeDeleteFunc(false));
    onClose();
  };

  return (
    <View style={styles.container}>
      <Modal visible={true} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>정말로 다 삭제하시겠습니까?</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="NO" onPress={handleDecline} color="black" />
            </View>
            <View style={styles.button}>
              <Button title="YES" onPress={handleApprove} color="black" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    zIndex: 999,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 50,
  },
  button: {
    width: 120,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
