import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({nativeID, placeholder, onChange, value,secureTextEntry=false, keyboardType="default"}) => {
  return (
    <TextInput 
        nativeID={nativeID}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={styles.inputField}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputField:{
        margin:"5px",
        padding:"5px",
        border:"1px solid",
        borderRadius:"5px",
        backgroundColor:"#FFFFFF",
    }
})