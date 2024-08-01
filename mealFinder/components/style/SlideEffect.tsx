import React, {Dispatch, RefObject, SetStateAction, useRef} from 'react';
import {View} from 'react-native';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';
import RenderItem from '../item/RenderItem';
import {forwardRef} from 'react';

type SlideEffectProps = {
  x: any;
  offset: any;
  width: any;
  data: any[];
  images: any[];
  setData: Dispatch<SetStateAction<any[]>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setPaginationIndex: Dispatch<SetStateAction<number>>;
  setIsAutoPlay: Dispatch<SetStateAction<boolean>>;
};

type Ref = Animated.FlatList<any>;

const SlideEffect = forwardRef<Ref, SlideEffectProps>(function SlideEffect(
  props,
  ref,
) {
  const {
    x,
    offset,
    width,
    data,
    images,
    setData,
    setCurrentIndex,
    setPaginationIndex,
    setIsAutoPlay,
  } = props;

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      x.value = e.contentOffset.x;
    },
    onMomentumEnd: e => {
      offset.value = e.contentOffset.x;
    },
  });
  const onViewableItemsChanged = ({viewableItems}: {viewableItems: any}) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setCurrentIndex(viewableItems[0].index);
      setPaginationIndex(viewableItems[0].index % images?.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <View>
      <Animated.FlatList
        ref={ref as RefObject<Animated.FlatList<any>>}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
        onEndReached={() => setData([...data, ...images])}
        onEndReachedThreshold={0.5}
        onScroll={onScroll}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        style={{height: width, flexGrow: 0}}
        pagingEnabled={true}
        horizontal={true}
        bounces={false}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
      />
    </View>
  );
});

export default SlideEffect;
