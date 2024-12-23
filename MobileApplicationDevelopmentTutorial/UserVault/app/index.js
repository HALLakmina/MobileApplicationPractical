import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Form from '../components/Form'
import { ScrollView } from 'react-native-web'

const Index = () => {
  return (
    <ScrollView style={{backgroundColor: 'lightgray'}}>
        <View style={styles.mainContainer}>
            <Form/>
        </View>
    </ScrollView>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent: 'center',
        width:"100%",
        minHeight:"100vh",
        padding:"10px"
    }
})