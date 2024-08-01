import {GestureResponderEvent} from 'react-native';

export interface useButtonProps {
  platForm?: string;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  accessibilityLabel?: string;
  accessibilityActions?: Object; //array
  onAccessibilityAction?: Function;
  disabled?: boolean;
}

export interface useButtonAndroidsProps extends useButtonProps {
  touchSoundDisabled?: boolean;
}

export default function useButton(props: useButtonProps) {
  let {platForm, title, onPress, ...restProps} = props;
  let additionalProps = {};
  if (platForm === 'ios') {
    additionalProps = {
      accessibilityLanguage: 'en-US',
    };
  } else if (platForm === 'android') {
    additionalProps = {
      touchSoundDisabled: 'false',
    };
  }

  const mergeButtonProps = {
    title,
    onPress,
    ...restProps,
    ...additionalProps,
  };
  return mergeButtonProps;
}
