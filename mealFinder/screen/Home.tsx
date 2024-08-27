import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import Indicator from '@/components/indicator/Indicator';
import SearchInput from '@/components/input/SearchInput';
import Food from '@/components/item/Food';
import RandomFood from '@/components/item/RanDomFood';
import SearchTitle from '@/components/title/SearchTitle';
import {ThemeContext} from '@/context/ThemeContext';
import useRandomData from '@/hooks/useRandomData';
import useSearchData from '@/hooks/useSearchData';
import {search} from '@/redux/searchAction';
import {useAppDispatch} from '@/redux/store';
import {darkModeStyling} from '@/styles/darkmode/dark_mode_style';
import {AuthState} from '@/types/reducerType';
import {saveSearchedValue} from '@/utils/search';

export default function Home() {
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedTitle, setSearchTitle] = useState('');
  const [isSearchApiCalled, setIsSearchApiCalled] = useState(false);
  const [isRandomApiCalled, setIsRandomApiCalled] = useState(false);
  const [noSearchKeyword, setNoSearchKeyword] = useState('');

  const dispatch = useAppDispatch();
  const {theme} = useContext(ThemeContext);
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const {searchData, setSearchData, isSearchLoading, getSearchFood} =
    useSearchData(searchedValue);

  const {randomData, setRandomData, isRandomDataLoading, getRanDomFood} =
    useRandomData();

  // random펑션
  const onPressRandomFunction = () => {
    setIsRandomApiCalled(true);
    setIsSearchApiCalled(false);
    getRanDomFood();
  };

  const onPressSearchFunction = async () => {
    setSearchData([]);
    setRandomData([]);
    setIsRandomApiCalled(false);
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

      await saveSearchedValue(authState, searchedValue);
      dispatch(search(searchedValue.trim()));
    }
  };

  // removeItemFromStorage('user');
  // removeItemFromStorage('kakao_user');
  const darkModeStyle = darkModeStyling(theme);

  if (isSearchApiCalled && isSearchLoading) {
    return <Indicator />;
  }

  if (isRandomApiCalled && isRandomDataLoading) {
    return <Indicator />;
  }

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
            isSearchApiCalled={isSearchApiCalled}
          />
        )}
      </View>
      {randomData.length === 0 ? (
        <Food data={searchData} />
      ) : (
        <RandomFood data={randomData} />
      )}
    </View>
  );
}
