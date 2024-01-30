import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react';
import { RootStackParams } from '../navigation/StackNavigation';


// interface RouteParams {
//   id:number;
//   nombre:string;
// }


// Recomendado por Documentation ↓
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{


}

export const PersonaScreen = ({route,navigation,}:Props) => {


// const params = route.params as RouteParams;
const params = route.params 


 

useEffect(() => {
 
    navigation.setOptions({
        title:params!.nombre
    })

}, [])


    
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
         JSON.stringify(params,null,4)
        }
        </Text>
    </View>
  )
}


