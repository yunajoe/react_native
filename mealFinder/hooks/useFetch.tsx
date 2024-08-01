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
      console.log('데이터가 불러오는것을 완료하였습니다');
    }
  }, [url, keyword]);
  return {fetchDataFunc, isDataLoading};
}

export default useFetch;
