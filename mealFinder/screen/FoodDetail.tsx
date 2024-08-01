import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {filterIngredient} from '../utils/filterIndredient';

export default function FoodDetail({route}) {
  const detailFood = route.params.data[0];
  const {strMeal, strMealThumb, strCategory, strArea, strInstructions} =
    detailFood;

  const ingredientArr = filterIngredient(detailFood);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{strMeal}</Text>
        <Image source={{uri: strMealThumb}} style={styles.image} />
        <View style={styles.mealInfo}>
          <Text style={styles.text}>{strCategory}</Text>
          <Text style={styles.text}>{strArea}</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.Instruction}>{strInstructions}</Text>
          <Text style={styles.IngredientTitle}>Ingredients</Text>
          <View style={styles.IngredientArr}>
            {ingredientArr.map((item, idx) => (
              <Text key={idx} style={styles.item}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355e3b',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 2,
  },
  mealInfo: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#e09850',
    borderStyle: 'dashed',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 5,
  },

  scrollView: {
    flexGrow: 1,
  },
  Instruction: {
    color: '#fff',
    textAlign: 'center',
  },
  IngredientArr: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  IngredientTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 5,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 5,
    // paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});
