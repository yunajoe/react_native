import {useState} from 'react';

function useSearchData(searchedValue: string) {
  const [searchData, setSearchData] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getSearchFood = async () => {
    setIsSearchLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`,
      );
      const json = await response.json();
      setSearchData(json.meals);
    } catch (error) {
      setIsError('error');
      setIsSearchLoading(true);
    } finally {
      setIsSearchLoading(false);
    }
  };

  return {
    searchData,
    setSearchData,
    isSearchLoading,
    isError,
    getSearchFood,
  };
}

export default useSearchData;
