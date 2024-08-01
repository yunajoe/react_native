// import {Food} from '../types/Type';

import {Food} from '../types/item';

type FilterIngredientProps = {
  randomData: Food;
};

export const filterIngredient = (randomData: FilterIngredientProps) => {
  let result = [];
  let str = 'strIngredient';
  let str2 = 'strMeasure';

  for (let i = 1; i <= 20; i++) {
    const ingredient = randomData[`${str}${i}`]; // randomData[strIngredient1]
    const measure = randomData[`${str2}${i}`]; // randomData[strMeasure1]
    if (!ingredient) break;
    if (ingredient !== '') {
      let totalMeasure = ingredient + ' - ' + measure;
      result.push(totalMeasure);
    }
  }

  return result;
};
