import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { AuthProvider } from './src/context/AuthContext';



export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      {/* <DrawerNavigation/> */}
      <DrawerNavigation/>
      {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


