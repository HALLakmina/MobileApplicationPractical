import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FamilyMemberBox = ({details}) => {
  return (
    <View style={styles.familyMemberBox}>
      <Text style={styles.name}>{details.familyMember}</Text>
      <Text>{details.relationship}</Text>
    </View>
  )
}

export default FamilyMemberBox

const styles = StyleSheet.create({
    familyMemberBox:{
        backgroundColor:"#b2beb5",
        padding:"10px",
        marginVertical:"10px",
        borderRadius:"10px",
    },
    name:{
        fontWeight:"bold",
    }
})