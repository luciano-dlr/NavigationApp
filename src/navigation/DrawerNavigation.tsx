import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Image, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

  const { width } = useWindowDimensions();




  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width >= 768 ? 'permanent' : 'front'),

      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {/* <Drawer.Screen name="StackNavigation" options={{headerShown: false}} component={StackNavigation} /> */}
      <Drawer.Screen name="Tabs" options={{ headerShown: false }} component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}



const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
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

          onPress={() => navigation.navigate('Tabs')}

          style={styles.menuBtn}>

          <View style={styles.drawerItem}>

            <Text style={{ paddingHorizontal: 10 }}>

              <Icon name="bar-chart" size={25} color="black" />

            </Text>
            <Text style={styles.menuTxt}>primero</Text>


          </View>

        </TouchableOpacity>


        <TouchableOpacity

          onPress={() => navigation.navigate('SettingsScreen')}

          style={styles.menuBtn}>

          <Text style={{ paddingHorizontal: 10 }}>

            <Icon name="baseball" size={25} color="black" />

          </Text>
          <Text style={styles.menuTxt}>Segundo</Text>

        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )

}



