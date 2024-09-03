import React, {useEffect, useRef} from 'react';
import type {ViewStyle} from 'react-native';
import {Animated} from 'react-native';

type FadeOutProps = {
  style?: ViewStyle;
  children?: React.ReactNode;
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FadeOut({style, children, setIsToastOpen}: FadeOutProps) {
  const fadeOutAdmin = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeOutAdmin, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setIsToastOpen(false);
    });
  }, [fadeOutAdmin]);

  return (
    <Animated.View style={[style, {opacity: fadeOutAdmin}]}>
      {children}
    </Animated.View>
  );
}

export default FadeOut;
