import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () =>  {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:(width >= 768 ? 'permanent' : 'front')
      


    }}

    
    >
      <Drawer.Screen name="StackNavigation" options={{title:'Home',headerShown: false}} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}}  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}



