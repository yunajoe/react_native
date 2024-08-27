import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {DataType} from '@/screen/RegisterEmail';

type EmailListProps = {
  data: DataType[];
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
function EmailList({
  data,
  email,
  setEmail,
  isSelected,
  setIsSelected,
}: EmailListProps) {
  const handlePress = (title: string) => {
    setEmail(title);
    setIsSelected(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isSelected &&
        data.map((item, index) => {
          return (
            <View key={item.id} style={styles.item}>
              <Pressable onPress={() => handlePress(item.title)}>
                <Text>{item.title}</Text>
              </Pressable>
            </View>
          );
        })}
    </SafeAreaView>
  );
}

export default EmailList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#dee2f2',
    height: 60,
    padding: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
