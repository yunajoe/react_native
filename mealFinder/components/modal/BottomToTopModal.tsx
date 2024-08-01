import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectedDeleteFunc, wholeDeleteFunc} from '../../redux/searchAction';
import DeleteConfirmModal from './DeleteConfirmModal';
import {SearchState} from '../../types/reducerType';

type ButtonToTopModalProps = {
  visible: boolean;
  onClose: () => void;
};

const BottomToTopModal = ({visible, onClose}: ButtonToTopModalProps) => {
  const [animation] = useState(new Animated.Value(0));

  const searchState = useSelector(
    (state: {searchReducer: SearchState}) => state.searchReducer,
  );

  const dispatch = useDispatch<any>();

  // 팝업창이 나타날 때 애니메이션을 적용합니다.
  //   start는 animation이후, 실행할 콜백이다
  const slideIn = useCallback(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // console.log('slideIn이 끗났다');
    });
  }, []);

  // 팝업창이 사라질 때 애니메이션을 적용합니다.
  const slideOut = useCallback(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      // console.log('slideOut이 끗났다');
    });
  }, []);

  // 팝업창이 나타날 때 애니메이션을 적용합니다.
  React.useEffect(() => {
    if (visible) {
      slideIn();
    } else {
      slideOut();
    }
  }, [visible]);

  // 애니메이션을 적용합니다.
  const translateY = animation.interpolate({
    // 0일때, 즉, slideIn일떄 output result가 900까지 가야한다
    inputRange: [0, 1],
    outputRange: [800, 0], // 팝업창이 화면 아래에서 시작하여 위로 올라옵니다.
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
      //   true라고 하면은 뒷배경이 보인다. false는 뒷배경이 안보이게 됨
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
