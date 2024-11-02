import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import CustomView from '../../components/CustomView'
import UserContext from '@/ContextAPI/UserContext'

const Index = ({navigation}) => {
    const {userInformation={}} = useContext(UserContext)
  return (
    <CustomView>
      <Button onPress={() =>navigation.navigate("Login")} title={"Logout"} color="red"/>
      <Text style={styles.welcomeText}>{`Welcome ${userInformation.name}`}</Text>
      <View style={styles.userInformationBox}>
        <Text style={styles.emailText}>Email : </Text>
        <Text style={styles.emailText}>{userInformation.email}</Text>
      </View>
    </CustomView>
  )
}

export default Index

const styles = StyleSheet.create({
    welcomeText: {
        color:"white",
        fontSize:"25px",
        textAlign:'center',
        fontWeight:"bold",
    },
    userInformationBox:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    emailText:{
        fontSize:"18px",
        color:"white"
    }
})