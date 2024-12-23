import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteBox = ({details}) => {
  return (
    <View style={styles.noteBox}>
      <View>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.title}>{`${details?.date?.year}/${details?.date?.month}/${details?.date?.day}`}</Text>
      </View>
      <Text style={styles.note}>{details.note}</Text>
    </View>
  )
}

export default NoteBox

const styles = StyleSheet.create({
    noteBox:{
        padding:"10px",
        marginVertical:"10px",
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