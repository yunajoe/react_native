import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EditScreenLayout from '@/components/layout/EditScreenLayout';

function RegisterEmail() {
  return (
    <EditScreenLayout>
      <View style={styles.container}>
        <Text>이메일은 최대 3개까지 등록가능합니다</Text>
      </View>
    </EditScreenLayout>
  );
}

export default RegisterEmail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
