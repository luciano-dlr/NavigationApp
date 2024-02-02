import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {


  const insets = useSafeAreaInsets();

  const {signIn,authState} = useContext(AuthContext)

  // console.log("🚀 ~ SettingsScreen ~ authState:", authState)

  

  return (
    <View style={{ marginTop: insets.top }}>
      <Text style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
        fontSize: 20
      }}>Settings Screen</Text>

      <Text>{JSON.stringify(authState,null,4)}</Text>

      {
        authState.favoriteIcon && (

          <Icon 
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}/>
          
        )
      }
     


    </View>
  )
}

