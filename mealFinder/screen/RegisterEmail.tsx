import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import EditScreenLayout from '@/components/layout/EditScreenLayout';
import EmailList from '@/components/list/EmailList';
import {
  emailProcessTwo,
  emailProcessing,
  filterMatchText,
} from '@/utils/processing';

export type DataType = {
  id: number;
  title: string;
};

function RegisterEmail() {
  const [email, setEmail] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const onPress = () => {
    console.log('눌렀땨');
  };

  const handleOnChange = ({nativeEvent: {eventCount, target, text}}) => {
    setIsSelected(false);
    // console.log('text', text);m
  };

  const disabled = email.length === 0 ? true : false;

  const data = Array.from({length: 8}, (_, i) => {
    return {
      id: i,
      title: `${email}@${emailProcessing(i)}`,
    };
  });

  const result = filterMatchText(email);

  return (
    <EditScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>이메일은 최대 3개까지 등록가능합니다</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            onChange={handleOnChange}
          />
          <Pressable
            style={[
              styles.button,
              {backgroundColor: disabled ? '#a9adb9' : '#e4e6ed'},
            ]}
            disabled={disabled}
            onPress={onPress}>
            <Text>확인</Text>
          </Pressable>
        </View>
        {/* data리스트컴퍼넌 */}
        {!isSelected && email.length > 0 && !email.includes('@') && (
          <EmailList
            data={data}
            email={email}
            setEmail={setEmail}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        )}
        {!isSelected &&
          email.length > 0 &&
          email.includes('@') &&
          result?.domain !== '' && (
            <View>
              <Text>{emailProcessTwo(result)}</Text>
            </View>
          )}
        {!isSelected &&
          email.length > 0 &&
          email.includes('@') &&
          result?.domain === '' && (
            <EmailList
              data={data}
              email={email}
              setEmail={setEmail}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          )}
      </View>
      <View style={{width: '100%'}}>
        <Button title="확인" />
      </View>
    </EditScreenLayout>
  );
}

export default RegisterEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: 'black',
    padding: 6,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray', // Set the border color here
    borderWidth: 2, // Set the border width here
    borderRadius: 4, // Optional: for rounded corners
    padding: 8,
    width: '80%',
  },
  button: {
    borderColor: 'gray', // Set the border color here
    borderWidth: 2, // Set the border width here
    borderRadius: 4, // Optional: for rounded corners
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
  },
});
