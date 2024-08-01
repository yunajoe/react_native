import React, {useContext} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {FilterContext} from '../context/FilterContext';

export const MemoziedFilteredFood = React.memo(function FilteredFood() {
  const {filterData} = useContext(FilterContext);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={filterData}
        renderItem={({index, item, separators}) => (
          <TouchableHighlight
            key={index}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: item.strMealThumb,
                }}
              />

              <Text>{item.strMeal}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
});

export default MemoziedFilteredFood;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 100,
  },
  item: {
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 10,
  },
});
