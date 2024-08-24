import {Food} from '@/types/item';

export const filterIngredient = (props: Food) => {
  let str = 'strIngredient';
  let str2 = 'strMeasure';
  let result = [];

  for (let i = 1; i <= 10; i++) {
    const ingredient = props[`${str}${i}` as keyof Food];
    const measure = props[`${str2}${i}` as keyof Food];
    if (!ingredient) {
      break;
    }

    if (measure) {
      let completeSentence = ingredient + ' - ' + measure;
      result.push(completeSentence);
    }
  }

  return result;
};
