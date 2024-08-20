import {Food} from '@/types/item';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Drawer: undefined;
  FoodDetail: {data: Array<Food>};
  FoodFilter: undefined;
  FilteredFood: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MyInterest: undefined;
  ProfileEdit: undefined;
  NewProfile: undefined;
  NickNameEdit: undefined;
};

export type FoodDetailRouteProps = RouteProp<RootStackParamList, 'FoodDetail'>;
