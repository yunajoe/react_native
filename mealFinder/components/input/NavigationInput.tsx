import {styles} from '@/styles/input/navigation_input_style';
import {faArrowRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

type NavigationInputProps = {
  title: string;
  onPress: () => void;
  icon?: IconDefinition;
  data?: string;
};

function NavigationInput({
  title,
  onPress,
  icon = faArrowRight,
  data,
}: NavigationInputProps) {
  return (
    <Pressable style={styles.interest_keyword_container} onPress={onPress}>
      <Text>{title}</Text>
      <View style={styles.icon}>
        <Text style={styles.data}>{data}</Text>
        <FontAwesomeIcon size={10} icon={icon} />
      </View>
    </Pressable>
  );
}

export default NavigationInput;
