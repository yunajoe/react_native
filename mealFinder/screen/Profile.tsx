import SignButton from '@/components/button/SignButton';
import NavigationInput from '@/components/input/NavigationInput';
import useAlertMessage from '@/hooks/useAlertMessage';
import {styles} from '@/styles/screen/profile_style';
import {getItemFromStorage} from '@/utils/storage';
import {faBowlFood} from '@fortawesome/free-solid-svg-icons/faBowlFood';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser, withDrawUser} from '../redux/action';
import {AuthState, DeleteUserState} from '../types/reducerType';

export default function Profile() {
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  // const updateUserState = useSelector(
  //   (state: {updateUserReducer: UpdateUserState}) => state.updateUserReducer,
  // );

  const deleteState = useSelector(
    (state: {deleteUserReducer: DeleteUserState}) => state.deleteUserReducer,
  );

  const navigation = useNavigation<any>();

  const dispatch = useDispatch<any>();

  const handleLogOut = async () => {
    const data = await getItemFromStorage('user');
    dispatch(logOutUser(data.email));
  };

  const handleWithDrawal = async () => {
    const data = await getItemFromStorage('user');
    dispatch(withDrawUser(data.email));
  };

  useAlertMessage({
    state: {message: authState.logoutMessage, status: authState.logoutStatus},
    destination: 'Home',
    actionType: 'LOGOUT',
  });

  useAlertMessage({
    state: {
      message: deleteState.deleteUserMessage,
      status: deleteState.deleteUserStatus,
    },
    destination: 'Home',
    actionType: 'DELETE/USER',
  });

  const handleMyInterest = () => {
    navigation.navigate('MyInterest');
  };

  const handleProfileEdit = () => {
    navigation.navigate('ProfileEdit');
  };

  // useEffect(() => {
  //   const handleReadStorage = async () => {
  //     const data = await getItemFromStorage('user');
  //     if (data !== null) {
  //       setEmail(data.email);
  //       setUserName(data.username);
  //     }
  //   };

  //   handleReadStorage();
  // }, [updateUserState.password, updateUserState.username, authState.email]);

  // useEffect(() => {
  //   dispatch(resetAuthUser);
  // }, []);
  return (
    <View>
      {authState.id === '' ? (
        <Text
          style={styles.greetingText}
          onPress={() => navigation.navigate('SignIn')}>
          로그인을해주세요
        </Text>
      ) : (
        <View style={styles.loginUserContainer}>
          <View style={styles.introduceContainer}>
            <View>
              <FontAwesomeIcon size={80} icon={faBowlFood} />
            </View>
            <Text style={styles.greetingText}>
              {authState.username}님 안녕하세요 반갑습니다
            </Text>
          </View>
          <NavigationInput
            title="내가 관심있어하는 키워드보러가기"
            onPress={handleMyInterest}
          />
          <NavigationInput
            title="내 정보 수정하러가기"
            onPress={handleProfileEdit}
          />
          <View style={styles.button_container}>
            <SignButton title="로그아웃하기" onPress={handleLogOut} />
            <SignButton title="회원탈퇴하기" onPress={handleWithDrawal} />
          </View>
        </View>
      )}
    </View>
  );
}
