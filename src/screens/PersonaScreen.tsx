import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react';
import { RootStackParams } from '../navigation/StackNavigation';
import { AuthContext } from '../context/AuthContext';


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

const {changeName} = useContext(AuthContext)



useEffect(() => {
 
    navigation.setOptions({
        title:params!.nombre
    })

}, [])


useEffect(() => {
  
    
  changeName(params.nombre)

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


