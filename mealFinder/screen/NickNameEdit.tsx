import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import SignButton from '@/components/button/SignButton';
import InputError from '@/components/error/InputError';
import {Separator} from '@/components/seperator/Seperator';
import {nickname} from '@/consts/error';
import useAlertMessage from '@/hooks/useAlertMessage';
import {updateUserNickName} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {styles} from '@/styles/screen/nickname_edit_style';
import {AuthState, UpdateUserState} from '@/types/reducerType';
import {validUserName} from '@/utils/checkInputValidation';
import {getItemFromStorage} from '@/utils/storage';

function NickNameEdit() {
  const [newNickName, onChangeNewNickName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const authState = useSelector(
    (state: {authReducer: AuthState}) => state.authReducer,
  );

  const updateUserState = useSelector(
    (state: {updateUserReducer: UpdateUserState}) => state.updateUserReducer,
  );

  const dispatch = useAppDispatch();

  const handleChange = (username: string) => {
    if (validUserName(username)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const handleUpdateUserName = async () => {
    const data = await getItemFromStorage('user');
    console.log('유저데이터', data);

    dispatch(
      updateUserNickName({
        email: data.email,
        username: newNickName,
      }),
    );
  };

  useAlertMessage({
    state: {
      message: updateUserState.updateUserNameMessage,
      status: updateUserState.updateUserNameStatus,
    },
    destination: 'NewProfile',
    actionType: 'UPDATE/USER',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input_container}>
        <Text style={styles.title}>새로운 닉네임을 입력해주세요</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor:
                newNickName.length > 0 && isDisabled ? 'red' : 'black',
            },
          ]}
          placeholder={authState.username}
          onChangeText={text => {
            onChangeNewNickName(text);
            handleChange(text);
          }}
        />
        {newNickName.length > 0 && isDisabled && (
          <InputError errorMessage={nickname} />
        )}
      </View>
      <View>
        <Separator />
        <SignButton
          disabled={isDisabled}
          title="변경완료"
          onPress={handleUpdateUserName}
        />
      </View>
    </SafeAreaView>
  );
}

export default NickNameEdit;
