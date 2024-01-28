import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}


