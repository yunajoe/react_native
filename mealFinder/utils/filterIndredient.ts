import {Food} from '@/types/item';

type IngredientProperties = {
  [key: `strIngredient${number}`]: string | undefined;
  [key: `strMeasure${number}`]: string | undefined;
};
type FilterIngredientProps = IngredientProperties & {
  randomData: Food;
};

export const filterIngredient = (props: FilterIngredientProps) => {
  const {randomData} = props;

  let result = [];
  let str = 'strIngredient';
  let str2 = 'strMeasure';

  for (let i = 1; i <= 20; i++) {
    const ingredient = randomData[`${str}${i}` as keyof Food];
    const measure = randomData[`${str2}${i}` as keyof Food];
    if (!ingredient) {
      break;
    }
    if (ingredient !== '') {
      let totalMeasure = ingredient + ' - ' + measure;
      result.push(totalMeasure);
    }
  }

  return result;
};
