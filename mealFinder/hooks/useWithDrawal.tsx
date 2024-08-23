import {withDrawUser} from '@/redux/action';
import {useAppDispatch} from '@/redux/store';
import {getItemFromStorage} from '@/utils/storage';

function useWithDrawal() {
  const dispatch = useAppDispatch();

  const handleWithDrawal = async () => {
    const data = await getItemFromStorage('user');
    dispatch(withDrawUser(data.email));
  };
  return handleWithDrawal;
}

export default useWithDrawal;
