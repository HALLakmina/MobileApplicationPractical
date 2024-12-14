import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadingText = ({children}) => {
  return (
    <Text style={styles.mainText}>{children}</Text>
  )
}

export default HeadingText

const styles = StyleSheet.create({
  mainText: {
    textAlign: 'center',
    fontSize:"25px",
    fontWeight:"bold",
    fontFamily:"Calibri"
  }
})