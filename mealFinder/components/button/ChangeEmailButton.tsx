import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {styles} from '@/styles/button/change_email_button';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ChangeEmailButtonProps = {
  onPress: () => void;
  email: string;
  type: 'general' | 'kakao';
};

function ChangeEmailButton({onPress, email, type}: ChangeEmailButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <View style={styles.user_info}>
          <Text>{email}</Text>
          {type === 'general' ? (
            <View style={styles.email}>
              <Icon name="email" size={12} />
              <Text>이메일</Text>
            </View>
          ) : (
            <View style={styles.email}>
              <MaterialIcon name="message" size={12} color="#FFD700" />
              <Text>카카오톡</Text>
            </View>
          )}
        </View>
        <View style={styles.radio_icon}>
          {/* <Icon name="radio-button-unchecked" size={28} color="fff" /> */}
          <Icon name="radio-button-checked" size={28} color="fff" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChangeEmailButton;
