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
  const [remainingTimes, setRemainingTimes] = useState<null | number>(null);
  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );

  console.log('남은시간', remainingTimes);

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
        console.log('[prev', prev);
        if (!prev) {
          clearInterval(interval);
          return;
        }
        if (prev >= 1000) {
          return prev - 1000;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTimes]);

  const {formatMinutes, formatSeconds} = formatting(remainingTimes);

  console.log('format', formatMinutes, formatSeconds);
  if (!remainingTimes) {
    return;
  }

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
