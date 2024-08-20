import React from 'react';
import {useSelector} from 'react-redux';

import ChangeEmailButton from '@/components/button/ChangeEmailButton';
import EditScreenLayout from '@/components/layout/EditScreenLayout';
import {AuthState} from '@/types/reducerType';

function ChangeEmail() {
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );
  const onPress = () => {
    console.log('대표 이메일을 변경합니다');
  };

  return (
    <EditScreenLayout>
      <ChangeEmailButton
        type="general"
        onPress={onPress}
        email={authState.email}
      />
      <ChangeEmailButton
        type="kakao"
        onPress={onPress}
        email="yunaaa0620@daum.net"
      />
    </EditScreenLayout>
  );
}

export default ChangeEmail;
