import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {emailProcessing} from '@/utils/processing';

type ItemData = {
  id: string;
  title: string;
};

type EmailListProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
function EmailList({
  email,
  setEmail,
  isSelected,
  setIsSelected,
}: EmailListProps) {
  // const [isSelected, setIsSelected] = useState(false);

  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `${email}@${emailProcessing(index)}`,
  });

  const handlePress = (title: string) => {
    // Additional logic when item is pressed
    setEmail(title);
    setIsSelected(true);
  };

  // console.log('이메일', email);
  // console.log('isSelecte', isSelected);

  const DATA = Array.from({length: 8}, (v, i) => {
    return {
      id: i,
      title: `${email}@${emailProcessing(i)}`,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      {!isSelected &&
        DATA.map((item, index) => {
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
    // flex: 1,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#dee2f2',
    height: 60,
    padding: 10,
    justifyContent: 'center',
    marginBottom: 10,
    // marginVertical: 0,
    // marginHorizontal: 0,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // padding: 20,
  },
  title: {
    // fontSize: 18,
    // fontWeight: '700',
  },
});
