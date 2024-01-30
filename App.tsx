import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  )
}


