import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Image, View } from 'react-native';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const MenuLeft = () =>  {

  const {width} = useWindowDimensions();




  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:(width >= 768 ? 'permanent' : 'front'),
      
    }}
    drawerContent={(props)=> <DrawerContent {...props}/>}
    >
      <Drawer.Screen name="StackNavigation" options={{headerShown: false}} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen"   component={SettingsScreen} />
    </Drawer.Navigator>
  );
}



const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/psd-gratis/ilustracion-3d-persona-gafas-sol-cabello-verde_23-2149436201.jpg?w=826&t=st=1706638139~exp=1706638739~hmac=8d788b40e9fe5389fc7aca014ead4552fb37fa91c76fd934e82a2549fbe344ad' }}
          style={styles.avatar}
        />
      </View>
      {/* Menu */}
      <View style={styles.menuContainer}>

        <TouchableOpacity 
        
        onPress={()=> navigation.navigate('StackNavigation')}

        style={styles.menuBtn}>

          <Text style={styles.menuTxt}>Soy el primero</Text>

        </TouchableOpacity>


        <TouchableOpacity 
        
        onPress={()=> navigation.navigate('SettingsScreen')}

        style={styles.menuBtn}>

          <Text style={styles.menuTxt}>Soy el Segundo</Text>

        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}



