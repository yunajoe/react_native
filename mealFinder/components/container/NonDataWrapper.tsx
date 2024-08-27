import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import {images} from '../../utils/processing';
import Pagination from '../Pagination';
import BackImage from '../style/BackImage';
import SlideEffect from '../style/SlideEffect';

// 필터링 버튼 누르기 전에
export default function NonDataWrapper() {
  const [data, setData] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const ref = useAnimatedRef<Animated.FlatList<null>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const interval = useRef<NodeJS.Timeout>();

  const x = useSharedValue(0);
  const offset = useSharedValue(0);
  const {width} = useWindowDimensions();
  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 3000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, offset, width]);
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            {currentIndex === index && (
              <BackImage index={index} item={item} x={x} />
            )}
          </View>
        );
      })}
      <SlideEffect
        ref={ref}
        x={x}
        offset={offset}
        width={width}
        data={data}
        images={images}
        setData={setData}
        setCurrentIndex={setCurrentIndex}
        setPaginationIndex={setPaginationIndex}
        setIsAutoPlay={setIsAutoPlay}
      />
      <Pagination paginationIndex={paginationIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#B6C4B6',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
