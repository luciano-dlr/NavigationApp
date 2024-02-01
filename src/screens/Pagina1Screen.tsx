import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';


// interface Props extends StackScreenProps<any, any> {};

interface Props extends DrawerScreenProps<any, any> { }



export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({

      headerLeft: () => (

        <TouchableOpacity

          onPress={() => { navigation.toggleDrawer() }}
        >

          <Text style={{ padding: 10 }}>
            <Icon name={'layers'} size={30} color="black" />
          </Text>

        </TouchableOpacity>
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



      <Text style={{
        marginVertical: 20,
        fontSize: 20,
      }}>Navegar con Argumentos</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>


        <TouchableOpacity style={{
          ...styles.bigBtn,
          backgroundColor: '#5856d6'
        }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}>
          <Text style={styles.bigBtnText}>
            <Icon name="person-circle-outline" size={75} color="black" />

          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.bigBtn,
            backgroundColor: '#ff9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}>
          <Text style={styles.bigBtnText}>
            <Icon name="people-circle" size={75} color="black" />

          </Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}


