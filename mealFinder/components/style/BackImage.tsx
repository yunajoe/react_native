import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  index: number;
  item: any;
  x: SharedValue<number>;
};

export default function BackImage({index, item, x}: Props) {
  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-0.6, 1, -0.6],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnim,
    };
  });

  return (
    <View>
      <Animated.Image
        source={item.image}
        style={[
          styles.absoluteFillObject,
          {
            width: width,
            height: width,
            backgroundColor: 'black',
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  absoluteFillObject: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
