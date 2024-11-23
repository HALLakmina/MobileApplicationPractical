import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomView = ({children}) => {
  return (
    <View  style={styles.mainContainer}>
        {children}
    </View>
  )
}

export default CustomView

const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'20px',
        minHeight:'100vh',
        width:"100%",
        backgroundColor:'black',
    },
})