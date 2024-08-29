import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

type AuthrizationCodeTimeProps = {
  currentTime: number;
  expiredTime: number;
};

function AuthrizationCodeTimer({
  currentTime,
  expiredTime,
}: AuthrizationCodeTimeProps) {
  const [remainingMinutes, setRemainingMinutes] = useState();
  const [remainingSeconds, setRemainingSeconds] = useState();

  console.log('나는나마있눈', currentTime, expiredTime, typeof currentTime);
  return <View style={styles.container}></View>;
}

export default AuthrizationCodeTimer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    position: 'absolute',
    right: 100,
    top: 10,
  },
});
