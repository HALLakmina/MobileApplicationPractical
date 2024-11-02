import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet } from "react-native";
import Login from "./Login"
import Registration from "./Registration"
import Home from "./Home"

import UserContext from "../ContextAPI/UserContext"
import { useState } from "react";

const Index = ()=> {
  const [userInformation, setUserInformation] = useState({name:'', email:'', password:''})
  const Stack = createNativeStackNavigator();
  const userRegistration = (payload: any)=>{
    setUserInformation(payload)
    console.log("userRegistration", payload)
  }
  const controlEvents = (event:string, payload: any)=> {
    switch (event){
      case 'registration':
        userRegistration(payload)
    }
  }
  return (
    <UserContext.Provider value={{userInformation, controlEvents}}>
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
          <Stack.Screen 
            name="Registration"
            component={Registration}
            options={{title: 'Registration'}}
          />
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
export default Index