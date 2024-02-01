import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{
                padding: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    backgroundColor: 'powderblue',
                    borderBottomWidth: 0,
                    elevation: 0
                },
                tabBarIcon:({color,focused}) => {

      
                    let iconName:string = '';
            
                    switch (route.name) {
                      case 'Chat':
                        iconName = 'chatbox-ellipses'
                        break;
                      case 'Contacts':
                        iconName = 'people'
                        break;
                      case 'Albums':
                        iconName = 'albums'
                        break;
                    
                     
                    }
            
                    return <Text style={{color}}><Icon name={iconName} size={24} color="black" /></Text>
                  }


            })}




        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}