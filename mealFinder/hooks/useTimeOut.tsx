import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {StatusState} from '@/types/reducerType';
import {convertDateFormat} from '@/utils/processing';

function useTimeOut(currentTime: number, expiredTime: number) {
  const [remainingTimes, setRemainingTimes] = useState<null | number>(null);

  const statusState = useSelector(
    (state: {statusReducer: StatusState}) => state.statusReducer,
  );
  const {authRizationStatus} = statusState;

  useEffect(() => {
    if (currentTime && expiredTime) {
      const remainingTime = convertDateFormat(currentTime, expiredTime);
      setRemainingTimes(remainingTime);
    }
  }, [authRizationStatus, currentTime, expiredTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimes(prev => {
        if (!prev) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1000;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTimes]);

  return {
    remainingTimes,
  };
}

export default useTimeOut;
