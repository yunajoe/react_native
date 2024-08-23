import {NativeModules} from 'react-native';

import {KaKaoLogOutUser, logOutUser} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {KaKaoLogOutApi} from '@/types/kakao';
import {getItemFromStorage} from '@/utils/storage';

const {getKaKaoLogOut} = NativeModules.KaKaoModule;
function useLogOut() {
  const dispatch = useAppDispatch();
  const handleLogOut = async () => {
    const data = await getItemFromStorage('user');
    const kakaoUser = await getItemFromStorage('kakao_user');

    if (data !== null) {
      dispatch(logOutUser(data.email));
    }

    if (kakaoUser !== null) {
      getKaKaoLogOut((result: KaKaoLogOutApi | null) => {
        if (result === null) {
          dispatch(KaKaoLogOutUser(result));
        } else {
          const logOutData = {
            email: kakaoUser.kakaoEmail,
            ...result,
          };
          dispatch(KaKaoLogOutUser(logOutData));
        }
      });
    }
  };
  return handleLogOut;
}

export default useLogOut;
