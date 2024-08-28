import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import EditScreenLayout from '@/components/layout/EditScreenLayout';
import EmailList from '@/components/list/EmailList';
import useAlertMessage from '@/hooks/useAlertMessage';
import {checkNewEmail} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {StatusState} from '@/types/reducerType';
import {
  emailProcessTwo,
  filterMatchText,
  processDomainPart,
  processLocalPart,
} from '@/utils/processing';

function RegisterEmail() {
  const [email, setEmail] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );
  const dispatch = useAppDispatch();
  console.log('statusState', statusState);

  const handlePress = async (email: string) => {
    dispatch(checkNewEmail(email));
  };

  const handleOnChange = ({nativeEvent: {eventCount, target, text}}) => {
    setIsSelected(false);
  };

  const disabled = email.length === 0 ? true : false;

  const data = Array.from({length: 8}, (_, i) => {
    return {
      id: i,
      title: `${processLocalPart(email)}@${processDomainPart(i)}`,
    };
  });

  const result = filterMatchText(email);

  const dataTwo = emailProcessTwo(result);

  const borderColor = statusState.registerEmailStatus === 400 ? 'red' : 'gray';

  // useAlertMessage()
  useAlertMessage({
    state: {
      message: statusState.registerEmailMessage,
      status: statusState.registerEmailStatus,
    },
    actionType: 'REGISTER/EMAIL',
  });
  return (
    <EditScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>이메일은 최대 3개까지 등록가능합니다</Text>
        <View style={styles.emailContainer}>
          <TextInput
            style={[styles.input, {borderColor: borderColor}]}
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
            onPress={() => handlePress(email)}>
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
            <EmailList
              data={dataTwo}
              email={email}
              setEmail={setEmail}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
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
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    width: '80%',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
  },
});
