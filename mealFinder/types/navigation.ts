import {NavigationProp} from '@react-navigation/native';

// export type MyDrawerProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'Drawer'>;
// };

// export type FoodDetailProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'FoodDetail'>;
// };
// export type FoodFilterProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'FoodFilter'>;
// };

// export type FilterFoodProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'FilteredFood'>;
// };

// export type SignInProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
// };

// export type HomeProps = {
//   navigation: DrawerScreenProps<RootDrawerParamList, 'Home'>;
// };

// export type ProfileProps = {
//   navigation: DrawerScreenProps<RootDrawerParamList, 'Profile'>;
// };

// export type SearchProps = {
//   navigation: DrawerScreenProps<RootDrawerParamList, 'Search'>;
// };

// stack

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
];

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;
