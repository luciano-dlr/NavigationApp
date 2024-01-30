import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {


  const insets = useSafeAreaInsets();
  
  return (
    <View style={{marginTop:insets.top}}>
      <Text style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
        fontSize:20
      }}>Settings Screen</Text>
    </View>
  )
}

