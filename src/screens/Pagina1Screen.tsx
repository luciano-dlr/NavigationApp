import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any>{


}




export const Pagina1Screen = ({navigation}:Props) => {

// console.log("🚀 ~ Pagina1Screen ~ props:", navigation)

    

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 1 Screen</Text>

      <Button
      title='Ir a Pagina 2'
      onPress={()=> navigation.navigate('Pagina2Screen') }
      />
    </View>
  )
}


