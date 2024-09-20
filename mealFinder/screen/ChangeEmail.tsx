import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useSelector} from 'react-redux';

import ChangeEmailButton from '@/components/button/ChangeEmailButton';
import EditScreenLayout from '@/components/layout/EditScreenLayout';
import useMounted from '@/hooks/useMounted';
import {getSubEmailList, getUserInfo} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {StackNavigation} from '@/types/navigation';
import {AuthState, ListState} from '@/types/reducerType';
import {useNavigation} from '@react-navigation/native';

function ChangeEmail() {
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const listState = useSelector(
    (state: {listReducer: ListState}) => state.listReducer,
  );

  console.log('LLL', listState);
  const dispatch = useAppDispatch();
  // useMounted(dispatch(getSubEmailList(authState.id)));
  useMounted(getSubEmailList(authState.id));

  const navigation = useNavigation<StackNavigation>();
  const handleUserInfo = async () => {
    dispatch(getUserInfo(authState.id));
  };
  const onPress = () => {
    navigation.navigate('RegisterEmail');
  };

  return (
    <EditScreenLayout>
      <ChangeEmailButton
        type="general"
        onPress={handleUserInfo}
        email={authState.email}
      />
      {/* <ChangeEmailButton
        type="kakao"
        onPress={onPress}
        email="yunaaa0620@daum.net"
      /> */}
      <View style={styles.email_add_container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.text_container}>
            <Text style={styles.text}>이메일 직접 등록하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </EditScreenLayout>
  );
}

export default ChangeEmail;

const styles = StyleSheet.create({
  email_add_container: {
    backgroundColor: 'rgba(25, 2, 14, 0.18)',
    width: 160,
    marginTop: 50,
    padding: 10,
    borderRadius: 100,
  },

  text_container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
