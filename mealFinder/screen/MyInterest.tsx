import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import SearchedItem from '../components/item/SearchedItem';
import BottomToTopModal from '../components/modal/BottomToTopModal';
import {selectedDeleteFunc} from '../redux/searchAction';
import {AuthState, SearchState} from '../types/reducerType';
import {getItemFromStorage} from '../utils/storage';
import {styles} from '@/styles/screen/my_interest_style';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
    <View>
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
