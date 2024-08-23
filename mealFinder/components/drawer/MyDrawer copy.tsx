import React from 'react';

import HomeHeader from '@/components/header/HomeHeader';
import Home from '@/screen/Home';
import MyInterest from '@/screen/MyInterest';
import Profile from '@/screen/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  MyInterest: undefined;
  Search: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const HomeHeaderComponent = () => <HomeHeader />;

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'left',
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
          // headerTitle: HomeHeaderComponent,
          header: HomeHeaderComponent,
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="MyInterest" component={MyInterest} />
    </Drawer.Navigator>
  );
}
