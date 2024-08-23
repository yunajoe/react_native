import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from '@/styles/button/new_profile_button';

type NewProfileButtonProps = {
  handleLogOut: () => void;
  handleWithDrawal: () => void;
};

function NewProfileButton({
  handleLogOut,
  handleWithDrawal,
}: NewProfileButtonProps) {
  return (
    <View style={styles.logout_withdrawal_container}>
      <Pressable onPress={handleLogOut}>
        <Text>로그아웃</Text>
      </Pressable>
      <View style={styles.divider} />
      <Pressable onPress={handleWithDrawal}>
        <Text>회원탈퇴</Text>
      </Pressable>
    </View>
  );
}

export default NewProfileButton;
