import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {StatusState} from '@/types/reducerType';
import {formatting} from '@/utils/processing';

type AuthrizationCodeTimeProps = {
  remainingTimes: number | null;
};

function AuthrizationCodeTimer({remainingTimes}: AuthrizationCodeTimeProps) {
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );

  const {authRizationStatus} = statusState;

  if (authRizationStatus !== 200) {
    return null;
  }

  const {formatMinutes, formatSeconds} = formatting(remainingTimes ?? 0);

  return (
    <View style={styles.container}>
      <Text style={styles.minute}>{formatMinutes}</Text>
      <Text style={styles.colon}>:</Text>
      <Text style={styles.second}>{formatSeconds}</Text>
    </View>
  );
}

export default AuthrizationCodeTimer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '10%',
    position: 'absolute',
    right: 100,
    top: 14,
  },
  minute: {
    color: 'red',
    fontWeight: '700',
  },
  second: {
    color: 'red',
    fontWeight: '700',
  },
  colon: {
    color: 'red',
    fontWeight: '700',
  },
});
