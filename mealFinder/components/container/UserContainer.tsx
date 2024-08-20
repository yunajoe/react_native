import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import CustomAvatar from '@/components/avatar/CustomAvatar';
import NavigationInput from '@/components/input/NavigationInput';
import {styles} from '@/styles/container/user_container_style';
import {StackNavigation} from '@/types/navigation';
import {AuthState} from '@/types/reducerType';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

function UserContainer() {
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  const navigation = useNavigation<StackNavigation>();
  const handleNavigationToNickNameEditScreen = () => {
    navigation.navigate('NickNameEdit');
  };
  const handleNavigationToEmailEditScreen = () => {
    navigation.navigate('ChangeEmail');
  };

  return (
    <View style={styles.user_container}>
      <CustomAvatar />
      <View style={styles.input_container}>
        <NavigationInput
          title="닉네임"
          icon={faChevronRight}
          data={authState.username}
          onPress={handleNavigationToNickNameEditScreen}
        />
        <NavigationInput
          title="이메일"
          icon={faChevronRight}
          data={authState.email}
          onPress={handleNavigationToEmailEditScreen}
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
