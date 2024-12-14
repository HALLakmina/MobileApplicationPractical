import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormBackground = ({children}) => {
  return (
    <View style={[styles.formStyle, styles.shadowProp]}>
        {children}
    </View>
  )
}

export default FormBackground

const styles = StyleSheet.create({
    formStyle:{
        backgroundColor:"#ffffff",
        borderRadius:"10px",
        padding:"10px",
        width:"100%",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})