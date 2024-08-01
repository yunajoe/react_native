import {handleCheckByEmailAndPassword} from '@/api/check';
import {styles} from '@/styles/screen/profile_edit_style';
import {AuthState} from '@/types/reducerType';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function ProfileEdit() {
  const [password, setPassword] = useState('');

  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const navigation = useNavigation<any>();

  const handleConFirm = async () => {
    const {status, message} = await handleCheckByEmailAndPassword(
      authState.email,
      password,
    );
    if (status === 400) {
      return Alert.alert(message);
    }
    if (status === 200) {
      navigation.navigate('NewProfile');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>비밀번호재확인</Text>
        <Text>
          회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
          입력하게해주세요
        </Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>이메일</Text>
        <TextInput style={styles.input} value={authState.email} readOnly />
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordLabel}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button title="확인" onPress={handleConFirm} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     margin: 8,
//   },
//   textContainer: {
//     marginBottom: 20,
//   },
//   emailContainer: {
//     marginBottom: 20,
//   },
//   emailLabel: {
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     marginBottom: 20,
//   },
//   passwordLabel: {
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
