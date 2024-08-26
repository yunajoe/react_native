import {useState} from 'react';

function useRandomData() {
  const [randomData, setRandomData] = useState([]);
  const [isRandomDataLoading, setIsRandomDataLoading] = useState(false);
  const [isRandomDataError, setIsRandomDataError] = useState<string | null>(
    null,
  );

  const getRanDomFood = async () => {
    setIsRandomDataLoading(true);
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );
      const json = await response.json();
      setRandomData(json.meals);
    } catch (error) {
      setIsRandomDataError('error');
    } finally {
      setIsRandomDataLoading(false);
    }
  };
  return {
    randomData,
    setRandomData,
    isRandomDataError,
    isRandomDataLoading,
    getRanDomFood,
  };
}

export default useRandomData;
