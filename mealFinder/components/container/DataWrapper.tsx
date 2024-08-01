import React, {useContext, useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {FlatList} from 'react-native-gesture-handler';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FilterFood} from '../../types/item';
import {FilterContext} from '../../context/FilterContext';
import {useNavigation} from '@react-navigation/native';

type DataWrapperProps = {
  data: FilterFood[];
};

export default function DataWrapper({data}: DataWrapperProps) {
  const navigation = useNavigation();

  const [pageData, setPageData] = useState<FilterFood[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState({width: 0, height: 0});
  const {setFilterData} = useContext(FilterContext);

  const totalPage = data?.length > 0 && Math.ceil(data.length / 6);
  const handlePrevPage = () => {
    const copyData = [...data];
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    const resultData = copyData.slice(
      (currentPage - 1) * 6 - 6,
      (currentPage - 1) * 6,
    );

    setPageData(resultData);
  };

  const handleNextPage = () => {
    const copyData = [...data];
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
    const resultData = copyData.slice(currentPage * 6, currentPage * 6 + 6);

    setPageData(resultData);
  };

  const handleWholePage = () => {
    navigation.navigate('FilteredFood');
  };

  useEffect(() => {
    const copyData = [...data];
    const eachScreenData = copyData.slice(0, 6);
    setPageData(eachScreenData);
    setFilterData(data);
    setCurrentPage(1);
  }, [data, setFilterData]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  };
  const {width, height} = size;
  const eachItemWidth = Math.floor(width / 3); // 124
  const eachItemHeight = Math.floor(height / 2); // 186

  return (
    <>
      {data.length > 0 ? (
        <>
          <View style={filterStyle.sectionContainer}>
            <View style={filterStyle.sectionTitle}>
              <Text style={filterStyle.text}>전체보기</Text>
              <Pressable onPress={handleWholePage}>
                <FontAwesomeIcon icon={faArrowRight} size={24} />
              </Pressable>
            </View>
            <View style={filterStyle.filteredContainer} onLayout={handleLayout}>
              <FlatList
                numColumns={3}
                data={pageData}
                renderItem={({item}) => {
                  const {strMeal, strMealThumb} = item;
                  const previewImage = `${strMealThumb}` + '/preview';

                  return (
                    <View
                      style={[
                        filterStyle.previewItem,
                        {width: eachItemWidth, height: eachItemHeight},
                      ]}>
                      <View style={filterStyle.titleAndPic}>
                        <Text style={filterStyle.mealTitle}>{strMeal}</Text>
                        <Image
                          style={filterStyle.previewImage}
                          source={{
                            uri: previewImage,
                          }}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <View style={filterStyle.navigation}>
            <Pressable onPress={handlePrevPage}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} />
            </Pressable>
            <Text>
              {currentPage} / {totalPage}
            </Text>

            <Pressable onPress={handleNextPage}>
              <FontAwesomeIcon icon={faArrowRight} size={24} />
            </Pressable>
          </View>
        </>
      ) : (
        <View style={filterStyle.spinner}>
          <ActivityIndicator />
        </View>
      )}
    </>
  );
}

const filterStyle = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    // backgroundColor: 'white',
    padding: 10,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  // applyFilter를 누르면은 나오는 result
  filteredContainer: {
    height: 300,
  },
  titleAndPic: {
    position: 'relative',
  },
  mealTitle: {
    position: 'absolute',
    top: 0,
    color: 'black',
    zIndex: 1, // 추가
    fontWeight: 'bold',
  },
  previewItem: {
    width: 150,
  },

  previewImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },

  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 15,
    // backgroundColor: 'green',
    padding: 5,
  },
  spinner: {
    marginTop: 10,
    marginBottom: 10,
  },
});
