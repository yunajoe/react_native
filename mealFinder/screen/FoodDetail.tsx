import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {styles} from '@/styles/screen/food_detail_style';
import {filterIngredient} from '@/utils/filterIndredient';

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
        <View>
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
