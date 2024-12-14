import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const MainViewWrap = ({children}) => {
  return (
        <View style={styles.mainView}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                {children}
            </ScrollView>
        </View>
  )
}

export default MainViewWrap

const styles = StyleSheet.create({
    mainView: {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maiHeight:"100vh",
        height:"100%",
        padding:"10px",
        width: "100%",
    },
    scrollView: {
        minWidth:"320px",
        maxWidth:"480px",
        width: "100%",
    }
})