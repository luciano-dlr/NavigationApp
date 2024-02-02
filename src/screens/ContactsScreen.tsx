import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn,authState} = useContext(AuthContext)



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>

      {
        
        (authState.isLoggedIng === false )  ?
        
        <Button title='SingIn' onPress={ signIn} />
        
        : <></>
  
      }
    </View>
  )
}


