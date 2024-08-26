import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import RandomFoodButton from '@/components/button/RandomFoodButton';
import SeachFoodButton from '@/components/button/SeachFoodButton';
import {AllowedMode} from '@/theme';

type SearchInputProps = {
  searchedValue: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  theme: AllowedMode;
  searchFoodOnPress: () => void;
  randomFoodOnPress: () => void;
};

function SearchInput({
  searchedValue,
  setSearchedValue,
  theme,
  searchFoodOnPress,
  randomFoodOnPress,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          multiline
          maxLength={40}
          style={styles.input}
          placeholder="Search for meals or keywords"
          placeholderTextColor="#808080"
          onChangeText={setSearchedValue}
          value={searchedValue}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <SeachFoodButton theme={theme} onPress={searchFoodOnPress} />
      </View>
      <RandomFoodButton theme={theme} onPress={randomFoodOnPress} />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontSize: 14,
    borderBottomWidth: 0,
  },
});
