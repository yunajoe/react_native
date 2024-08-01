import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {readItemFromStorage} from '../../utils/storage';

export default function ProfileEditAggrement() {
  return (
    <View>
      <Text>약관 및 마케딩 수신동의</Text>
      <View>
        <Text>아이ㅇㅇㅇ콘</Text>
        <Text>개인정보 수집*이용동의(선택)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
