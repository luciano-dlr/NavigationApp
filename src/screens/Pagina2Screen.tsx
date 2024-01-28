import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 1 Screen</Text>

      <Button
      title='ir Pagina 3'
      onPress={ () => navigation.navigate("Pagina3Screen") }
      
      />
    </View>
  )
}


