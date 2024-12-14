import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home'
import RootContext from '../ContextAPI/DataHandlerContext'
const Stack = createNativeStackNavigator();


const Index = () => {
  const [userId, setUserID] = useState("")
  const rootDataHandler = (name,payload)=>{
    switch (name){
      case 'SetUserID':
        setUserID(payload)
        break;
      default:
        break;
    }
  }
  return (
    <RootContext.Provider value={{userId, rootDataHandler}}>
      <Stack.Navigator>
          <Stack.Screen
          name="Login"
              component={Login}
          />
          <Stack.Screen 
              name="Registration" 
              component={Registration}
          />
          <Stack.Screen 
              name="Home" 
              component={Home}
          />
      </Stack.Navigator>
    </RootContext.Provider>
  )
}

export default Index