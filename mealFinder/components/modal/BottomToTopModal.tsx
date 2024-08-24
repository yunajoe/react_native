import React, {useCallback, useState} from 'react';
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import {selectedDeleteFunc, wholeDeleteFunc} from '../../redux/searchAction';
import {SearchState} from '../../types/reducerType';
import DeleteConfirmModal from './DeleteConfirmModal';
import {useAppDispatch} from '@/redux/store';

type ButtonToTopModalProps = {
  visible: boolean;
  onClose: () => void;
};

const BottomToTopModal = ({visible, onClose}: ButtonToTopModalProps) => {
  const [animation] = useState(new Animated.Value(0));

  const searchState = useSelector(
    (state: {searchReducer: SearchState}) => state.searchReducer,
  );

  const dispatch = useAppDispatch();

  const slideIn = useCallback(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {});
  }, []);

  const slideOut = useCallback(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {});
  }, []);

  React.useEffect(() => {
    if (visible) {
      slideIn();
    } else {
      slideOut();
    }
  }, [visible]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 0],
  });

  const handleSelectedDeleteFunc = () => {
    dispatch(selectedDeleteFunc(true));
    onClose();
  };

  const handleWholeDeleteFunc = () => {
    dispatch(wholeDeleteFunc(true));
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}>
      {searchState.isWholeDeleteButtonClick && (
        <DeleteConfirmModal onClose={onClose} />
      )}

      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={onClose}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{translateY}]}]}>
          <View style={styles.deleteIndividual}>
            <Pressable onPress={handleSelectedDeleteFunc}>
              <Text style={styles.text}>선택 삭제</Text>
            </Pressable>
          </View>
          <View style={styles.deleteWhole}>
            <Pressable onPress={handleWholeDeleteFunc}>
              <Text style={styles.text}>전체 삭제</Text>
            </Pressable>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#E8DFCA',

    paddingTop: 30,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  //   선택삭제
  deleteIndividual: {
    marginBottom: 10,
  },
  deleteWhole: {
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    fontWeight: '300',
    marginLeft: 10,
  },
});

export default BottomToTopModal;
