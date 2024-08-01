import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

function SlideWrapper({data}) {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState({width: 0, height: 0});
  const {height, width} = useWindowDimensions();

  const transAnim = useRef(new Animated.Value(0)).current;

  let {width: windowWidth, height: windowHeight} = useWindowDimensions();
  windowHeight = windowHeight - 300;

  useEffect(() => {
    Animated.timing(transAnim, {
      toValue: 1,
      delay: 2500,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [transAnim]);

  return <View style={styles.container}></View>;
}

export default SlideWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    // padding: 10,
  },
  slideContainer: {},
  slide: {
    width: 10,
  },
});
