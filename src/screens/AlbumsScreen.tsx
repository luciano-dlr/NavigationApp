import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {

  const { authState, logOut } = useContext(AuthContext);
  const { isLoggedIng } = authState;


  return (
    <View>
      <Text>Albums Screen</Text>

      {
        isLoggedIng && <Button title='LogOut' onPress={logOut} />
      }



    </View>
  )
}

