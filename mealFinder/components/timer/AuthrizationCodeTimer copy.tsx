import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type AuthrizationCodeTimeProps = {
  formatMinutes: string;
  formatSeconds: string;
};

function AuthrizationCodeTimer({
  formatMinutes,
  formatSeconds,
}: AuthrizationCodeTimeProps) {
  const [remainingMinutes, setRemainingMinutes] = useState(formatMinutes);

  console.log('나는나마있눈');
  return (
    <View style={styles.container}>
      <Text>{remainingMinutes}</Text>
      <Text>{formatSeconds}</Text>
    </View>
  );
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
