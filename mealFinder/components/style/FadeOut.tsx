import React, {useEffect, useRef} from 'react';
import type {ViewStyle} from 'react-native';
import {Animated} from 'react-native';

type FadeOutProps = {
  style?: ViewStyle; // style은 선택적 props로 설정
  children?: React.ReactNode;
};

function FadeOut({style, children}: FadeOutProps) {
  const fadeOutAdmin = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeOutAdmin, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeOutAdmin]);

  return (
    <Animated.View style={[style, {opacity: fadeOutAdmin}]}>
      {children}
    </Animated.View>
  );
}

export default FadeOut;
