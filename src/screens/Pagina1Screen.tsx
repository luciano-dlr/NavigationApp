import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';


// interface Props extends StackScreenProps<any, any> {};

interface Props extends DrawerScreenProps<any,any>{}



export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:() => (
        <Button
        title='Menu'
        onPress={()=>{navigation.toggleDrawer()}}
        />
      )
    })
  }, [])
  



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


