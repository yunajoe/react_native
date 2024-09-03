import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import NewProfileButton from '@/components/button/NewProfileButton';
import UserContainer from '@/components/container/UserContainer';
import Toast from '@/components/toast/Toast';
import useLogOut from '@/hooks/useLogOut';
import useWithDrawal from '@/hooks/useWithDrawal';
import {useAppDispatch} from '@/redux/store';
import {StatusState} from '@/types/reducerType';

export default function NewProfile() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );
  const handleLogOut = useLogOut();
  const handleWithDrawal = useWithDrawal();
  const dispatch = useAppDispatch();

  console.log('statusReuder', statusState);

  useEffect(() => {
    if (statusState.sentCodeStatus === 200) {
      setIsToastOpen(true);
    }
    // return () => {
    //   dispatch(resetStatus);
    // };
  }, [statusState.sentCodeStatus]);

  return (
    <View style={styles.container}>
      <UserContainer />
      <NewProfileButton
        handleLogOut={handleLogOut}
        handleWithDrawal={handleWithDrawal}
      />
      {isToastOpen && (
        <Toast
          message="이메일이 추가가 되었습니다"
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
