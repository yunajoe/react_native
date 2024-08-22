import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FilterButton from '../components/button/FilterButton';
import DataWrapper from '../components/container/DataWrapper';
import NonDataWrapper from '../components/container/NonDataWrapper';
import CategoryItem from '../components/item/CategoryItem';
import useFetch from '../hooks/useFetch';
import {FilterFood} from '../types/item';
import {areaURL, categoryURL} from '../utils/api';
import {combinedData} from '../utils/filterScreen';
import FilterCategory from './FilterCategory';
import Indicator from '@/components/indicator/Indicator';

export default function FoodFilter() {
  const [cateGory, setCateGory] = useState('');
  const [area, setArea] = useState('');
  const [data, setData] = useState<FilterFood[]>([]);
  const [cateGoryIndex, setCategoryIndex] = useState(-1);
  const [areaIndex, setAreaIndex] = useState(-1);

  // filter링 버튼 누르기 전
  const [isFilterStart, setIsFilteringStart] = useState(false);

  // category를 택하는 펑션
  const handleCategoryFilter = (text: string) => {
    setCateGory(text);
  };

  // area를 택하는 펑션
  const handleAreaFilter = (text: string) => {
    setArea(text);
  };

  const handleTheSameIndex = () => {
    setCategoryIndex(-1);
    handleCategoryFilter('');
  };

  const handleTheDifferentIndex = (index: number, item: string) => {
    setCategoryIndex(index);
    handleCategoryFilter(item);
  };

  const areaHandleTheSameIndex = () => {
    setAreaIndex(-1);
    handleAreaFilter('');
  };

  const areaHandleTheDifferentIndex = (index: number, item: string) => {
    setAreaIndex(index);
    handleAreaFilter(item);
  };

  // hook불러오기

  const {
    fetchDataFunc: fetchCateGoryDataFunc,
    isDataLoading: isCateGoryDataLoading,
  } = useFetch({
    url: categoryURL,
    keyword: cateGory,
  });
  const {fetchDataFunc: fetchAreaDataFunc, isDataLoading: isAreaDataLoading} =
    useFetch({
      url: areaURL,
      keyword: area,
    });

  // category랑 area 메뉴 탭 가져오기
  const {totalData, isLoading} = FilterCategory();

  const handleApplyFilter = async () => {
    if (cateGory.length === 0 && area.length === 0) {
      Alert.alert('최소 한 개 이상 선택해주세요');
      return;
    }
    // 필터링화면 시작!
    setIsFilteringStart(true);

    if (cateGory.length > 0 && area.length === 0) {
      const result = await fetchCateGoryDataFunc();
      setData(result.meals);
    }
    if (area.length > 0 && cateGory.length === 0) {
      const result = await fetchAreaDataFunc();
      setData(result.meals);
    }
    if (area.length > 0 && cateGory.length > 0) {
      const arr1 = await fetchCateGoryDataFunc();
      const arr2 = await fetchAreaDataFunc();
      const data1 = arr1.meals;
      const data2 = arr2.meals;
      const result = combinedData({data1, data2});
      setData(result);
    }
  };

  // clearButton
  const handleClear = () => {
    // 필터링화면 없앰!
    setIsFilteringStart(false);
    setCategoryIndex(-1);
    setAreaIndex(-1);
    setCateGory('');
    setArea('');
    setData([]);
  };

  if (isLoading) {
    return <Indicator />;
  }

  return (
    <>
      <View>
        <SectionList
          sections={totalData}
          renderItem={() => null}
          renderSectionHeader={({section}) => {
            const {data, title} = section;
            return (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <FlatList
                  horizontal
                  data={data}
                  renderItem={({index, item}) => {
                    if (title === 'Category') {
                      return (
                        <CategoryItem
                          item={item}
                          sameIndexFunc={handleTheSameIndex}
                          differentIndexFunc={handleTheDifferentIndex}
                          index={index}
                          selectedIndex={cateGoryIndex}
                        />
                      );
                    }
                    if (title === 'Area') {
                      return (
                        <CategoryItem
                          item={item}
                          sameIndexFunc={areaHandleTheSameIndex}
                          differentIndexFunc={areaHandleTheDifferentIndex}
                          index={index}
                          selectedIndex={areaIndex}
                        />
                      );
                    }
                    return null;
                  }}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            );
          }}
        />
      </View>
      {/* 필털이 화면 */}
      {isFilterStart ? <DataWrapper data={data} /> : <NonDataWrapper />}

      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <FilterButton
          platForm="android"
          title="Clear"
          color="gray"
          onPress={handleClear}
        />
        <FilterButton
          platForm="android"
          title="Apply Filter"
          color="gray"
          onPress={handleApplyFilter}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  section: {
    borderWidth: 1, // border 두께
    borderColor: 'black', // border 색상
    borderStyle: 'solid', // border 스타일
    marginBottom: 50,
    height: 100,
  },

  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },

  sectionTitle: {
    fontSize: 30,
    color: 'black',
    marginTop: 10,
    padding: 5,
  },

  title: {
    fontSize: 12,
  },
  sectionContainer: {
    marginBottom: 0,
  },
});
