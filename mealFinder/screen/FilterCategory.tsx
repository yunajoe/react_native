import {useCallback, useEffect, useState} from 'react';
import {baseURL} from '../utils/api';

type Meal = {
  strCategory: string;
  strArea: string;
};

export default function FilterCategory() {
  const [categoryList, setCateGoryList] = useState<string[]>([]);
  const [categoryArea, setCateGoryArea] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCallCategoryAPI = useCallback(() => {
    const urls = [
      `${baseURL}/api/json/v1/1/list.php?c=list`,
      `${baseURL}/api/json/v1/1/list.php?a=list`,
    ];
    let requests = urls.map(url => fetch(url));

    Promise.all(requests)
      .then(response => {
        return response;
      })
      .then(responses => {
        return Promise.all(responses.map(r => r.json()));
      })
      .then(data => {
        setIsLoading(true);
        data.forEach(item => {
          const {meals} = item;
          meals.forEach((meal: Meal) => {
            if (meal.strCategory && !categoryList.includes(meal.strCategory)) {
              setCateGoryList(prev => [...prev, meal.strCategory]);
            } else if (meal.strArea && !categoryArea.includes(meal.strArea)) {
              setCateGoryArea(prev => [...prev, meal.strArea]);
            }
          });
        });
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryList, categoryArea]);

  useEffect(() => {
    getCallCategoryAPI();
  }, []);

  const totalData = [
    {
      title: 'Category',
      data: categoryList,
    },
    {
      title: 'Area',
      data: categoryArea,
    },
  ];
  return {
    totalData,
    isLoading,
  };
}
