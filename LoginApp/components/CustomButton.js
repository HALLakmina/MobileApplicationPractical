import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button} >
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        borderRadius:"50px",
        width:'100%',
        minWidth:"100px",
        padding:'10px',
        marginVertical:'10px',
        backgroundColor:'#a49d83',
    },
    buttonText:{
        textAlign:'center',
        fontSize:'20px',
        fontWeight:'bold',
        color:'white',
    }
})