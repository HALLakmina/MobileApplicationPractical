import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-web'

const NoteBook = () => {
  return (
    <View style={styles.notePad}>
        <TextInput placeholder='Title' style={styles.inputField}/>
        <TextInput placeholder='Note' style={styles.inputField} rows={10} multiline/>
        <Button title={"Add To Calender"}/>
    </View>
  )
}

export default NoteBook

const styles = StyleSheet.create({
    notePad:{
        marginTop:"20px",
        width: '100%',
    },
    inputField:{
        padding:"5px",
        marginVertical:"5px",
        borderRadius:"10px",
        backgroundColor:"lightgray"
    }
})