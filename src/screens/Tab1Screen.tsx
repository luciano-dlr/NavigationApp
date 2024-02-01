import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { useEffect } from 'react';

import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  
  useEffect(() => {
    
    console.log('tabScreen 1');
    
  }, [])
  
  
  //icono en drawer btn
  //drawer items 

  //bot navigation
  //top navigation

  //pedro y maria

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Bottom Icons</Text>

      <Text>
        
      <Icon name="balloon" size={75} color="black" />
      <Icon name="apps" size={75} color="black" />
      <Icon name="id-card" size={75} color="black" />

      </Text>

      <Text style={styles.title}>Top icons</Text>

      <Text>
        
      <Icon name="chatbox-ellipses" size={75} color="black" />
      <Icon name="people" size={75} color="black" />
      <Icon name="albums" size={75} color="black" />

      </Text>
      <Text style={styles.title}>Drawer</Text>

      <Text>
        
      <Icon name="menu" size={75} color="black" />
      <Icon name="bar-chart" size={75} color="black" />
      <Icon name="baseball" size={75} color="black" />

      </Text>
      <Text style={styles.title}>Pedro y maria</Text>

      <Text>
        
      <Icon name="person-circle" size={75} color="black" />
      <Icon name="people-circle" size={75} color="black" />
     

      </Text>
    </View>

  )
}

