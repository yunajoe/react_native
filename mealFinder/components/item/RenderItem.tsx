import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: any;
  index: number;
  x: SharedValue<number>;
};

export default function RenderItem({item, index, x}: Props) {
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
    <View style={{width: width, height: width}}>
      {/* <Animated.Image
        source={item.image}
        style={[styles.titleImage, animatedStyle]}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    width: null,
    resizeMode: 'contain',
  },
});
