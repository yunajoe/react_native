import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginRight: 5,
    marginBottom: 5,
  },
});
