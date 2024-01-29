import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const Pagina2Screen = () => {

  const navigation = useNavigation()

  useEffect(() => {

    navigation.setOptions({
      title:'Soy pantalla 2',
      headerBackTitle:''
    })

  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2 Screen</Text>

      <Button
        title='ir Pagina 3'
        onPress={() => navigation.navigate("Pagina3Screen")}

      />
    </View>
  )
}


