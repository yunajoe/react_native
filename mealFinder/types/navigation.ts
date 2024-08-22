import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = [
  'Drawer',
  'FoodDetail',
  'FoodFilter',
  'FilteredFood',
  'SignUp',
  'SignIn',
  'MyInterest',
  'ProfileEdit',
  'NewProfile',
  'NickNameEdit',
  'Profile',
  'ChangeEmail',
];

export type RootStackParamList = Record<
  ScreenNames[number] | string,
  undefined
>;

export type StackNavigation = NavigationProp<RootStackParamList>;
