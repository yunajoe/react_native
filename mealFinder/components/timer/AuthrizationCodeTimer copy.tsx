import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {StatusState} from '@/types/reducerType';
import {convertDateFormat, formatting} from '@/utils/processing';

type AuthrizationCodeTimeProps = {
  currentTime: number;
  expiredTime: number;
};

function AuthrizationCodeTimer({
  currentTime,
  expiredTime,
}: AuthrizationCodeTimeProps) {
  const [remainingTimes, setRemainingTimes] = useState<null | number>(
    expiredTime - currentTime,
  );
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );

  const {authRizationStatus} = statusState;

  useEffect(() => {
    if (authRizationStatus === 200 && currentTime && expiredTime) {
      const remainingTime = convertDateFormat(currentTime, expiredTime);
      setRemainingTimes(remainingTime);
    }
  }, [authRizationStatus]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimes(prev => {
        if (!prev) {
          clearInterval(interval);
          return null;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTimes]);

  if (!remainingTimes) return;

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
