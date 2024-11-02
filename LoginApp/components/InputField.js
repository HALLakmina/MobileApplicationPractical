import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const InputField = ({placeholder, ...props}) => {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default InputField

const styles = StyleSheet.create({
  inputField:{
    padding:"10px",
    margin:"10px",
    fontWeight:"bold",
    borderRadius:'50px',
    backgroundColor:'#a49d83',
    color:'white',
    width:'100%',
  }
})