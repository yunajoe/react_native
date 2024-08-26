import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import SearchInput from '@/components/input/SearchInput';
import Food from '@/components/item/Food';
import RandomFood from '@/components/item/RanDomFood';
import SearchTitle from '@/components/title/SearchTitle';
import {ThemeContext} from '@/context/ThemeContext';
import useRandomData from '@/hooks/useRandomData';
import useSearchData from '@/hooks/useSearchData';
import {useAppDispatch} from '@/redux/store';
import {darkModeStyling} from '@/styles/darkmode/dark_mode_style';
import {AuthState} from '@/types/reducerType';

export default function Home() {
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedTitle, setSearchTitle] = useState('');

  const dispatch = useAppDispatch();
  const {theme} = useContext(ThemeContext);
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const {searchData, setSearchData, isSearchLoading, getSearchFood} =
    useSearchData(searchedValue);

  const {randomData, setRandomData, getRanDomFood} = useRandomData();

  const [isSearchApiCalled, setIsSearchApiCalled] = useState(false);

  //검색어 입력 입력 안 했을때
  const [noSearchKeyword, setNoSearchKeyword] = useState('');

  // random펑션
  const onPressRandomFunction = () => {
    getRanDomFood();
  };

  // 검색 펑션
  // const onPressSearchFunction2 = async () => {
  //   setIsSearchApiCalled(true);
  //   if (searchedValue.trim().length === 0) {
  //     setNoSearchKeyword('검색어 입력을 안했습니다');
  //     setSearchData([]);
  //   } else {
  //     setSearchTitle(searchedValue.trim());
  //     setSearchedValue('');
  //     setSearchData([]);
  //     getSearchFood();

  //     await saveSearchedValue(authState, searchedValue);
  //     dispatch(search(searchedValue.trim()));
  //   }
  // };

  const onPressSearchFunction = async () => {
    setSearchData([]);
    const value = searchedValue.trim();

    // 검색어 입력 안 했을때
    if (value.length === 0) {
      setNoSearchKeyword('검색어를 입력해주세요');
      setIsSearchApiCalled(false);
    } else {
      //  검색어 입력 했을떄
      setNoSearchKeyword('');
      setIsSearchApiCalled(true);
      setSearchTitle(value);
      getSearchFood();
    }
  };

  // const aaa = getItemFromStorage('user');
  // const bbb = getItemFromStorage(authState.email);
  // aaa.then(data => {
  //   console.log('dasdfsdfsdfta', data);
  // });

  // bbb.then(data => {
  //   console.log('ㅎㅎㅎㅎㅎ', data);
  // });

  const darkModeStyle = darkModeStyling(theme);

  return (
    <View style={darkModeStyle.container}>
      <Text style={darkModeStyle.appTitle}>Meal Finder</Text>
      <SearchInput
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
        theme={theme}
        searchFoodOnPress={onPressSearchFunction}
        randomFoodOnPress={onPressRandomFunction}
      />
      <View>
        {randomData.length === 0 && (
          <SearchTitle
            theme={theme}
            noSearchKeyword={noSearchKeyword}
            searchData={searchData}
            searchedTitle={searchedTitle}
            isSearchLoading={isSearchLoading}
            isSearchApiCalled={isSearchApiCalled}
          />
        )}
      </View>
      <View>
        {randomData.length === 0 ? (
          <Food data={searchData} />
        ) : (
          <RandomFood data={randomData} />
        )}
      </View>

      {/* 데이터 뿌려주는곳 */}
      {/* <View>
        {randomData.length === 0 ? (
          noSearchKeyword.length === 0 && <Food data={searchData} />
        ) : (
          <RandomFood data={randomData} />
        )}
      </View> */}

      {/* {randomData?.length > 0 ? (
        <RandomFood data={randomData} />
      ) : (
        noSearchKeyword?.length === 0 && <Food data={searchData} />
      )} */}
    </View>
  );
}

// const aaa = getItemFromStorage('user');
// const bbbbb = getItemFromStorage(authState.email)
// aaa.then(data => {
//   console.log('data', data);
// });

// removeItemFromStorage('user');
// removeItemFromStorage('kakao_user');
