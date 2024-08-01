// import {StackNavigation} from '@/App';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import NavigationInput from '@/components/input/NavigationInput';
import {styles} from '@/styles/container/user_container_style';
import {StackNavigation} from '@/types/navigation';
import {AuthState} from '@/types/reducerType';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

function UserContainer() {
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  const navigation = useNavigation<StackNavigation>();
  const handleNavigationToNickNameScreen = () => {
    navigation.navigate('NickNameEdit');
  };

  return (
    <View style={styles.user_container}>
      <CustomAvatar />
      <View style={styles.input_container}>
        <NavigationInput
          title="닉네임"
          icon={faChevronRight}
          data={authState.username}
          onPress={handleNavigationToNickNameScreen}
        />
        <NavigationInput
          title="이메일"
          icon={faChevronRight}
          data={authState.email}
          onPress={() => console.log('ㅎㅎㅎ')}
        />
        <NavigationInput
          title="비밀번호"
          icon={faChevronRight}
          onPress={() => console.log('ㅎㅎㅎ')}
        />
      </View>
    </View>
  );
}

export default UserContainer;
