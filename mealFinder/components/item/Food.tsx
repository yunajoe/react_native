import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const LinkButton = props => {
  const navigation = useNavigation<any>();
  const {children, to, item, data, action} = props;

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('FoodDetail', {
          strId: to.params.strId,
          data: data,
        })
      }
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? 'rgba(0, 0, 0, 0.7)'
            : 'rgba(10, 68, 18, 0.9)',
          opacity: pressed ? 0.8 : 0,
        },
        styles.textContainer,
      ]}>
      {({pressed}) => (
        <Text style={[styles.text, {color: pressed ? 'white' : 'transparent'}]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

function Food({data}): React.JSX.Element {
  console.log('FoodComponent', data);
  return (
    <>
      <FlatList
        columnWrapperStyle={styles.columnContainer}
        numColumns={2}
        keyExtractor={item => item.idMeal}
        data={data}
        renderItem={({item}) => {
          const {idMeal, strMeal, strMealThumb} = item;

          return (
            <View style={styles.container}>
              <View style={[styles.ImageContainer]}>
                <Image source={{uri: strMealThumb}} style={styles.image} />
              </View>
              <LinkButton
                data={data}
                item={item}
                to={{
                  screen: 'FoodDetail',
                  params: {strId: idMeal},
                }}>
                {strMeal}
              </LinkButton>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  columnContainer: {
    columnGap: 10,
    rowGap: 10,
  },

  ImageContainer: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 2,
  },
  textContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderWidth: 4,
    borderRadius: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Food;
