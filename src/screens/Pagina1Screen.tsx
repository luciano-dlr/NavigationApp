


import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {


};



export const Pagina1Screen = ({ navigation }: Props) => {

  // console.log("🚀 ~ Pagina1Screen ~ props:", navigation)



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>

      <Button
        title='Ir a Pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />



      <Text>Navegar con Argumentos</Text>

      <View style={{flexDirection:'row',justifyContent:'space-around'}}>


      <TouchableOpacity style={{
        ...styles.bigBtn,
        backgroundColor:'#5856d6'
      }}
        onPress={() => navigation.navigate('PersonaScreen',{
          id:1,
          nombre:'Pedro'
        })}>
        <Text style={styles.bigBtnText}>Pedro</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.bigBtn,
          backgroundColor:'#ff9427'
        }}
        onPress={() => navigation.navigate('PersonaScreen',{
          id:2,
          nombre:'Maria'
        })}>
        <Text style={styles.bigBtnText}>Maria</Text>

      </TouchableOpacity>
      </View>

    </View>
  )
}


