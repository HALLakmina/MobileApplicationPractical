import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EducatingDetailsBox = ({details}) => {
  return (
    <View style={styles.educatingDetailsBox}>
      <Text style={styles.name}>{details}</Text>
    </View>
  )
}

export default EducatingDetailsBox

const styles = StyleSheet.create({
  educatingDetailsBox:{
    backgroundColor:"#b2beb5",
    padding:"10px",
    marginVertical:"10px",
    borderRadius:"10px",
  },
  name:{
      fontWeight:"bold",
  }
})