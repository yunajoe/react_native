import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import SearchTitle from '@/components/title/SearchTitle';
import {ThemeContext} from '@/context/ThemeContext';
import useRandomData from '@/hooks/useRandomData';
import useSearchData from '@/hooks/useSearchData';
import {search} from '@/redux/searchAction';
import {useAppDispatch} from '@/redux/store';
import {darkModeStyling} from '@/styles/darkmode/dark_mode_style';
import {wrapperStyle} from '@/styles/screen/home_style';
import {AuthState} from '@/types/reducerType';
import {saveSearchedValue} from '@/utils/search';

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
  const onPressSearchFunction2 = async () => {
    setIsSearchApiCalled(true);
    if (searchedValue.trim().length === 0) {
      setNoSearchKeyword('검색어 입력을 안했습니다');
      setSearchData([]);
    } else {
      setSearchTitle(searchedValue.trim());
      setSearchedValue('');
      setSearchData([]);
      getSearchFood();

      await saveSearchedValue(authState, searchedValue);
      dispatch(search(searchedValue.trim()));
    }
  };

  const onPressSearchFunction = async () => {
    const value = searchedValue.trim();

    console.log('입력한 검색어입니다앙아', value);

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
      <View style={wrapperStyle.container}>
        <View style={wrapperStyle.subContainer}>
          <TextInput
            multiline
            maxLength={40}
            style={styles.inputStyle}
            placeholder="Search for meals or keywords"
            placeholderTextColor="#808080"
            onChangeText={setSearchedValue}
            value={searchedValue}
            underlineColorAndroid="rgba(0,0,0,0)"
          />

          {/* <TouchableHighlight
            underlayColor="rgba(10, 68, 18, 0.9)"
            style={styles.searchButtonStyle}
            onPress={() => {
              setRandomData([]);
              if (searchedValue.trim().length === 0) {
                setNoSearchKeyword('검색어가 없습니다');
              } else {
                onPressSearchFunction();
                setNoSearchKeyword('');
              }
            }}>
            <View>
              <FontAwesomeIcon
                icon={faSearch}
                color={theme === 'dark' ? 'white' : 'black'}
              />
            </View>
          </TouchableHighlight> */}
          {/* <TouchableHighlight
            underlayColor="rgba(10, 68, 18, 0.9)"
            style={styles.searchButtonStyle}
            onPress={onPressSearchFunction}>
            <View>
              <FontAwesomeIcon
                icon={faSearch}
                color={theme === 'dark' ? 'white' : 'black'}
              />
            </View>
            :
          </TouchableHighlight> */}
        </View>
        {/* 
        <TouchableHighlight
          underlayColor="rgba(10, 68, 18, 0.9)"
          style={styles.randomButtonStyle}
          onPress={onPressRandomFunction}>
          <View>
            <FontAwesomeIcon
              icon={faShuffle}
              color={theme === 'dark' ? 'white' : 'black'}
            />
          </View>
        </TouchableHighlight> */}
      </View>
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
const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    width: 300,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontSize: 14,
    borderBottomWidth: 0,
  },
  searchButtonStyle: {
    borderWidth: 1,
    borderColor: '#dedede',
    color: '#fff',
    fontSize: 14,
    padding: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  randomButtonStyle: {
    borderWidth: 1,
    borderColor: '#dedede',
    color: '#fff',
    fontSize: 14,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
