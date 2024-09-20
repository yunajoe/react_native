import {useEffect} from 'react';

import {useAppDispatch} from '@/redux/store';

// mount될때 뿌려쟈야 하는 데이터들?
function useMounted(callback: any) {
  const dispatch = useAppDispatch();

  console.log('저는 useMounted', callback);
  //   const [isMount, setIsMount] = useState(false);
  //   const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(callback);
  }, []);
}

export default useMounted;
