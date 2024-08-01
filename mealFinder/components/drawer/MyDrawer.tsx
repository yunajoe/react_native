import HomeHeader from '@/components/header/HomeHeader';
import Home from '@/screen/Home';
import MyInterest from '@/screen/MyInterest';
import Profile from '@/screen/Profile';
import {MyDrawerProps} from '@/types/navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

export type RootDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  MyInterest: undefined;
  Search: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function MyDrawer({navigation}: MyDrawerProps) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        drawerStyle: {
          backgroundColor: '#EAEAEA',
          width: 200,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HomeHeader navigation={navigation} />,
        }}
      />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="MyInterest" component={MyInterest} />
    </Drawer.Navigator>
  );
}
