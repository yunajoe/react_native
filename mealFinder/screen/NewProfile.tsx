import React from 'react';
import {View} from 'react-native';

import NewProfileButton from '@/components/button/NewProfileButton';
import UserContainer from '@/components/container/UserContainer';
import useLogOut from '@/hooks/useLogOut';
import useWithDrawal from '@/hooks/useWithDrawal';
import {styles} from '@/styles/screen/new_profile_style';

export default function NewProfile() {
  const handleLogOut = useLogOut();
  const handleWithDrawal = useWithDrawal();

  return (
    <View style={styles.container}>
      <UserContainer />
      <NewProfileButton
        handleLogOut={handleLogOut}
        handleWithDrawal={handleWithDrawal}
      />
    </View>
  );
}
