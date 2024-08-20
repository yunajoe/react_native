import {useCallback, useState} from 'react';

type UseFetchProps = {
  url?: string;
  keyword?: string;
};

function useFetch({url, keyword}: UseFetchProps) {
  const [isDataLoading, setIsDataLoading] = useState(true);

  // get메서드
  const fetchDataFunc = useCallback(async () => {
    try {
      setIsDataLoading(true);
      const fullUrl = `${url}${keyword}`;
      const response = await fetch(fullUrl);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      setIsDataLoading(false);
      console.warn('Error', error);
      return error;
    } finally {
      setIsDataLoading(false);
    }
  }, [url, keyword]);
  return {fetchDataFunc, isDataLoading};
}

export default useFetch;
