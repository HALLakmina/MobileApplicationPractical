import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteBox = () => {
  return (
    <View style={styles.noteBox}>
      <Text style={styles.title}>NoteBox</Text>
      <Text style={styles.note}>dfksdfjskdfjlsdjfsldjcskdjcs,dcdscnsdkcns</Text>
    </View>
  )
}

export default NoteBox

const styles = StyleSheet.create({
    noteBox:{
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"orange"
    },
    title:{
        fontSize:"18px",
        fontWeight:"bold",
        marginVertical:"5px"
    },
    note:{
        fontSize:"18px",
        marginVertical:"5px"
    }
})