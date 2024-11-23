import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Calculator from '../components/Calculator'

const App = () => {

    return (
        <View style={styles.mainContentContainer}>
            <Calculator/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    mainContentContainer:{
        padding:"10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:'relative',
        minWidth:'100vw',
        minHeight:'100vh',
        backgroundColor: '#B2BEB5',
    }
})