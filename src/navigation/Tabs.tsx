import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";

import { StackNavigation } from "./StackNavigation";
import { colores } from '../theme/appTheme';
import { Platform, Text } from "react-native";
import { TopTabNavigation } from "./TopTabNavigation";


export const Tabs = () => {

  return Platform.OS === 'ios'

  ?
  <TabsIOS/>
  :
  <TabsAndroid/>

}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    screenOptions={({route}) => ( {
      tabBarActiveTintColor:'white',
      tabBarActiveBackgroundColor:'black',
      tabBarInactiveBackgroundColor: colores.primary,
      tabBarLabelStyle:{
        fontSize:15,
      },
      tabBarIcon:({color,focused}) => {

      
        let iconName:string = '';

        switch (route.name) {
          case 'Tab1Screen':
              iconName = 'balloon'
            break;
          case 'TopTabNavigation':
            iconName = 'apps'
            break;
          case 'StackNavigation':
            iconName = 'id-card'
            break;
        
         
        }

        return <Text style={{color}}><Icon name={iconName} size={24} color="black" /></Text>
      }
      
    })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigation" component={TopTabNavigation} />
      <BottomTabAndroid.Screen name="StackNavigation"  component={StackNavigation} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () =>  {
  return (
    <BottomTabIOS.Navigator 

    screenOptions={({route}) => ( {
      tabBarActiveTintColor:'white',
      tabBarActiveBackgroundColor:'black',
      tabBarInactiveBackgroundColor: colores.primary,
      tabBarLabelStyle:{
        fontSize:15,
      },
      tabBarIcon:({color,focused,size}) => {

      
        let iconName:string = '';

        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'T1'
            break;
          case 'TopTabNavigation':
            iconName = 'T2'
            break;
          case 'StackNavigation':
            iconName = 'T3'
            break;
        
         
        }

        return <Text style={{color}}>{iconName}</Text>
      }
      
    })}
    >
      
      {/* <Tab.Screen name="Tab1Screen" options={{headerShown: false,title:'tab 1',tabBarIcon: (props) => <Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{headerShown: false,title:'tab 1',}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{headerShown: false,title:'tab 2'}} component={TopTabNavigation} />
      <BottomTabIOS.Screen name="StackNavigation" options={{headerShown: false,title:'Stack'}} component={StackNavigation} />
    </BottomTabIOS.Navigator>
  );
}