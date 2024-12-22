import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import NoteBox from '../../components/NoteBox'

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.mainTitle}>Welcome Back</Text>
      <View>
        <Text style={styles.subTitle}>To day planes</Text>
        <FlatList />
        <NoteBox/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeScreen:{
        padding:"10px"
    },
    mainTitle: {
        fontSize:"30px",
        fontWeight:"bold",
        margin:"10px"
    },
    subTitle:{
        fontSize:"20px",
        fontWeight:"bold",
        margin:"10px",       
    }
})