import React, {useContext, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {getItemFromStorage} from '../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {AuthState, SearchState} from '../types/reducerType';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FlatList} from 'react-native-gesture-handler';
import SearchedItem from '../components/item/SearchedItem';
import BottomToTopModal from '../components/modal/BottomToTopModal';
import {selectedDeleteFunc} from '../redux/searchAction';
import {ThemeContext} from '../context/ThemeContext';
import {AllowedMode, Colors} from '../theme';

function MyInterest() {
  const [dataArr, setDataArr] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch<any>();
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  const searchState = useSelector(
    (state: {searchReducer: SearchState}) => state.searchReducer,
  );

  const {theme, setToggleFunction} = useContext(ThemeContext);
  console.log('MYINTEREST컴퍼넌트입니다', theme);

  useEffect(() => {
    getItemFromStorage(authState.email).then(data => {
      if (data !== null) {
        setDataArr([...data]);
      }
    });
  }, [
    searchState.insertSearchItemArr.length,
    searchState.deletedSearchedItemArr.length,
    searchState.isWholeItemDelete,
  ]);

  // 처음에는 이전에 있는 아이템이 rendering. 즉 dispatch에서 삭제되어 state에들어온것 arr가  return되지 않는다

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleModalCloseFunc = () => {
    setIsOpenModal(false);
  };

  const handleDeleteCompletedFunc = () => {
    dispatch(selectedDeleteFunc(false));
  };

  return (
    <View style={styles.container}>
      {dataArr.length > 0 && (
        <View style={styles.recentContainer}>
          <View style={styles.recentContainerLabel}>
            <Text style={styles.text}>최근검색어</Text>
            {searchState.isSelectedDeleteButtonClick ? (
              <Pressable onPress={handleDeleteCompletedFunc}>
                <Text>삭제 완료</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleModal}>
                <FontAwesomeIcon icon={faEllipsisVertical} size={24} />
              </Pressable>
            )}
          </View>
          <View style={styles.itemContainer}>
            <FlatList
              data={dataArr}
              renderItem={({index, item}) => {
                // key로 prop을 내리면 undfined가 된다.
                // 그라구 index={index}로 안하구
                return <SearchedItem key={index} name={item} />;
              }}
              horizontal
            />
          </View>
        </View>
      )}
      <View style={styles.recommendedContainer}>
        <Text style={styles.text}>추천검색어</Text>
      </View>
      <BottomToTopModal visible={isOpenModal} onClose={handleModalCloseFunc} />
    </View>
  );
}

export default MyInterest;

const styles = StyleSheet.create({
  container: {},
  recentContainer: {
    backgroundColor: '#FFFFFF',
  },

  recentContainerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
  },

  recommendedContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
