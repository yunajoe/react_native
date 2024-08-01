// import {StackNavigation} from '@/App';
import {ThemeContext} from '@/context/ThemeContext';
import {loginUser} from '@/redux/action';
import {StackNavigation} from '@/types/navigation';
import {AuthState} from '@/types/reducerType';
import {getItemFromStorage} from '@/utils/storage';
import {faFilter, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeHeader() {
  // false일떄 dark모드, true일떄 light모드로 전환하기
  const [isLight, setIsLight] = useState(false);
  const toggleSwitch = () => setIsLight(prev => !prev);

  // context사용하기 for theme을 위해서
  const {theme, setToggleFunction} = useContext(ThemeContext);

  const navigation = useNavigation<StackNavigation>();
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  // const registerUserState = useSelector(
  //   (state: {createUserReducer: CreateUserState}) => state.createUserReducer,
  // );
  // // console.log('rrr', registerUserState);

  const dispatch = useDispatch<any>();

  const getLogIn = async () => {
    const data = await getItemFromStorage('user');
    if (data !== null) {
      const {email, username, password} = data;
      dispatch(loginUser({email, password}));
    }
  };

  useEffect(() => {
    if (authState.id !== '') {
      getLogIn();
    }
  }, [authState.id]);

  const setTheme = useCallback(() => {
    const themeValue = isLight ? 'light' : 'dark';
    setToggleFunction(themeValue);
  }, [isLight]);

  useEffect(() => {
    setTheme();
  }, [isLight]);

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View>
          {authState.accessToken !== null ? (
            <Text>{authState.username}님 좋은하루되세요!</Text>
          ) : (
            <Text>로그인을해주세요</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={styles.filterButton}>
            <FontAwesomeIcon icon={faUser} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FoodFilter');
          }}>
          <View style={styles.filterButton}>
            <FontAwesomeIcon icon={faFilter} size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={isLight ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLight}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    columnGap: 15,
    flex: 1,
    width: 330,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Header: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  filterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderWidth: 1, // border 두께
    borderColor: 'black', // border 색상
    borderStyle: 'solid', // border 스타일
  },

  switchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
