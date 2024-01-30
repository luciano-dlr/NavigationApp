import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { MenuLeft } from './src/navigation/MenuLeft';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation/> */}
      <MenuLeft/>
    </NavigationContainer>
  )
}


