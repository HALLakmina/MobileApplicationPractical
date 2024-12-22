import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './home'
import CalenderScreen from './calendar'
import { ScrollView } from 'react-native-web'
import SettingScreen from './setting'

const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calender" component={CalenderScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default Index
