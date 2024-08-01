import React from 'react';
import {View} from 'react-native';

import NewProfileButton from '@/components/button/NewProfileButton';
import UserContainer from '@/components/container/UserContainer';
import {styles} from '@/styles/screen/new_profile_style';

export default function NewProfile() {
  return (
    <View style={styles.container}>
      <UserContainer />
      <NewProfileButton />
    </View>
  );
}
