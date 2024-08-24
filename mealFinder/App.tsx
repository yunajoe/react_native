import * as React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';

import MyDrawer from '@/components/drawer/MyDrawer';
import {FilterContextProvider} from '@/context/FilterContext';
import {ThemeContextProvider} from '@/context/ThemeContext';
import store from '@/redux/store';
import ChangeEmail from '@/screen/ChangeEmail';
import MemoizedFilteredFood from '@/screen/FilteredFood';
import FoodDetail from '@/screen/FoodDetail';
import FoodFilter from '@/screen/FoodFilter';
import MyInterest from '@/screen/MyInterest';
import NewProfile from '@/screen/NewProfile';
import NickNameEdit from '@/screen/NickNameEdit';
import ProfileEdit from '@/screen/ProfileEdit';
import RegisterEmail from '@/screen/RegisterEmail';
import SignIn from '@/screen/SignIn';
import SignUp from '@/screen/SignUp';
import {RootStackParamList} from '@/types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer fallback={<Text>Loading중</Text>}>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Drawer"
          component={MyDrawer}
          options={{headerShown: false, headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen
          name="FoodFilter"
          component={FoodFilter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilteredFood"
          component={MemoizedFilteredFood}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyInterest" component={MyInterest} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="NewProfile" component={NewProfile} />
        <Stack.Screen name="NickNameEdit" component={NickNameEdit} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
        <Stack.Screen name="RegisterEmail" component={RegisterEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <FilterContextProvider>
          <RootNavigation />
        </FilterContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
