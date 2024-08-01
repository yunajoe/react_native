import {styles} from '@/styles/button/new_profile_button';
import React from 'react';
import {Text, View} from 'react-native';

function NewProfileButton() {
  return (
    <View style={styles.logout_withdrawal_container}>
      <Text>로그아웃</Text>
      <View style={styles.divider} />
      <Text>회원탈퇴</Text>
    </View>
  );
}

export default NewProfileButton;
