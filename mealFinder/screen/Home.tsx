import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faShuffle} from '@fortawesome/free-solid-svg-icons/faShuffle';
import RandomFood from '../components/item/RanDomFood';
import Food from '../components/item/Food';
import {ThemeContext} from '../context/ThemeContext';
import {AllowedMode, Colors} from '../theme';
import {getItemFromStorage, saveNonStringItemToStorage} from '../utils/storage';
import {AuthState} from '../types/reducerType';
import {useDispatch, useSelector} from 'react-redux';
import {search} from '../redux/searchAction';
import {checkValueInStorage} from '../utils/storageUtils';

export default function Home() {
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedTitle, setSearchTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch<any>();
  const {theme, setToggleFunction} = useContext(ThemeContext);
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  // search데이터보관하는곳
  const [data, setData] = useState([]);

  // random데이터
  const [randomData, setRandomData] = useState([]);

  // API호출을 했는지 check
  const [isAPICalled, setIsAPICalled] = useState(false);

  //검색어 입력 입력 안 했을때
  const [noSearchKeyword, setNoSearchKeyword] = useState<string | null>('');

  const getSearchFood = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`,
      );
      const json = await response.json();
      setData(json.meals);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 중복제거하기
  const saveSearchedValueFunc = async () => {
    if (authState.email !== '') {
      await getItemFromStorage(authState.email).then(async data => {
        if (data !== null) {
          const trimmedValue = searchedValue.trim();
          const result = checkValueInStorage(trimmedValue, data);
          if (trimmedValue.length > 0 && result) {
            const updatedData = [...data, trimmedValue];
            await saveNonStringItemToStorage({
              key: authState.email,
              saveValue: updatedData,
            });
          }
        } else {
          // data가 null즉, 처음일떄
          await saveNonStringItemToStorage({
            key: authState.email,
            saveValue: [searchedValue.trim()],
          });
        }
        dispatch(search(searchedValue.trim()));
      });
    }
  };

  const getRanDomFood = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );
      const json = await response.json();

      setRandomData(json.meals);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  // random펑션
  const onPressRandomFunction = () => {
    getRanDomFood();
  };

  // 검색 펑션
  const onPressFunction = async () => {
    if (searchedValue.trim().length === 0) {
      setIsAPICalled(false);
    } else {
      setSearchTitle(searchedValue.trim());
      setSearchedValue('');
      setIsAPICalled(true);
      getSearchFood();
      // storage에 검색어 저장하기
      await saveSearchedValueFunc();
    }
  };

  const darkModeStyle = styling(theme);
  const noDataText = (
    <Text style={[darkModeStyle.title, wrapperStyle.titleContainer]}>
      검색어를 입력해주세요
    </Text>
  );
  const conditionDataText =
    data === null ? (
      <Text style={[darkModeStyle.title, wrapperStyle.titleContainer]}>
        {searchedTitle} 검색어의 데이터가 없습니다
      </Text>
    ) : (
      <Text style={[darkModeStyle.title, wrapperStyle.titleContainer]}>
        {searchedTitle} 검색어의 결과 입니다
      </Text>
    );

  return (
    <View style={[{flex: 1}, darkModeStyle.container]}>
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

          <TouchableHighlight
            underlayColor="rgba(10, 68, 18, 0.9)"
            style={styles.searchButtonStyle}
            onPress={() => {
              setRandomData([]);
              if (searchedValue.trim().length === 0) {
                setNoSearchKeyword('검색어가 없습니다');
              } else {
                onPressFunction();
                setNoSearchKeyword('');
              }
            }}>
            <View>
              <FontAwesomeIcon
                icon={faSearch}
                color={theme === 'dark' ? 'white' : 'black'}
              />
            </View>
          </TouchableHighlight>
        </View>

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
        </TouchableHighlight>
      </View>
      <View>
        {randomData.length > 0
          ? null
          : noSearchKeyword && noSearchKeyword?.length > 0
          ? noDataText
          : isAPICalled &&
            (isLoading ? (
              <View style={styles.spinner}>
                <ActivityIndicator />
              </View>
            ) : (
              conditionDataText
            ))}
      </View>

      {randomData?.length > 0 ? (
        <RandomFood data={randomData} />
      ) : (
        noSearchKeyword?.length === 0 && <Food data={data} />
      )}
    </View>
  );
}

// dark모드랑 상관없는 기본적인 스타일
const styles = StyleSheet.create({
  spinner: {
    marginTop: 10,
    marginBottom: 10,
  },
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

// 이건 건드리지 말기
const wrapperStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

// dark모드에 따른 변화
const styling = (theme: AllowedMode) => {
  return StyleSheet.create({
    container: {
      backgroundColor: Colors[theme]?.themeColor,
    },
    appTitle: {
      textAlign: 'center',
      fontWeight: '900',
      color: Colors[theme]?.appTitle,
      fontSize: 30,
      marginBottom: 10,
    },
    title: {
      color: Colors[theme]?.appTitle,
      textAlign: 'center',
      fontSize: 20,
    },
  });
};
