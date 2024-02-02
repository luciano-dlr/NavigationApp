import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { useEffect } from 'react';

import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

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
      <Text style={styles.title}>Icons</Text>

      <Text>

        <TouchableIcon iconName="balloon" />
        <TouchableIcon iconName="apps" />
        <TouchableIcon iconName="id-card" />
        <TouchableIcon iconName="chatbox-ellipses" />
        <TouchableIcon iconName="people" />
        <TouchableIcon iconName="albums" />
        <TouchableIcon iconName="menu" />
        <TouchableIcon iconName="bar-chart" />
        <TouchableIcon iconName="baseball" />
        <TouchableIcon iconName="person-circle" />
        <TouchableIcon iconName="people-circle" />
        
      </Text>
    </View>

  )
}

