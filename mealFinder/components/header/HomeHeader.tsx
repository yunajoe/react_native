import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import DarkModeSwitch from '@/components/switch/DarkModeSwitch';
import {ThemeContext} from '@/context/ThemeContext';
import {KaKaoLoginUser, loginUser} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {StackNavigation} from '@/types/navigation';
import {AuthState} from '@/types/reducerType';
import {getItemFromStorage} from '@/utils/storage';
import {faFilter, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

export default function HomeHeader() {
  const [isLight, setIsLight] = useState(false);
  const toggleSwitch = () => setIsLight(prev => !prev);

  const {theme, setToggleFunction} = useContext(ThemeContext);

  const navigation = useNavigation<StackNavigation>();
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const dispatch = useAppDispatch();

  const getLogIn = async () => {
    const data = await getItemFromStorage('user');
    if (data !== null) {
      const {email, password} = data;
      dispatch(loginUser({email, password}));
    }

    const kakaoUser = await getItemFromStorage('kakao_user');
    if (kakaoUser !== null) {
      dispatch(
        KaKaoLoginUser({
          kakaoId: kakaoUser.kakaoId,
          kakaoEmail: kakaoUser.kakaoEmail,
          kakaoNickName: kakaoUser.kakaoNickName,
          profileImageUrl: kakaoUser.profileImageUrl,
          thumbnailImageUrl: kakaoUser.thumbnailImageUrl,
        }),
      );
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
  }, [isLight, theme]);

  useEffect(() => {
    setTheme();
  }, [isLight]);

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View>
          {authState.accessToken ? (
            <Text>{authState.username}님 좋은 하루 되세요!</Text>
          ) : (
            <Text>로그인을 해주세요</Text>
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
      <DarkModeSwitch isLight={isLight} toggleSwitch={toggleSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  Header: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
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
});
