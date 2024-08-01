import {FilterFood} from '../types/item';

type combinedDataProps = {
  data1: FilterFood[];
  data2: FilterFood[];
};
export const combinedData = ({data1, data2}: combinedDataProps) => {
  const commonData = data1.filter(item => {
    const result = data2.find(item2 => item2.idMeal === item.idMeal);
    if (result) {
      return item;
    }
  });
  return commonData;
};
