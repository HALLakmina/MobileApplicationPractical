import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calender from '../../components/Calender'

const CalenderScreen = () => {
  return (
    <View style={styles.calenderScreen}>
      <Calender/>
    </View>
  )
}

export default CalenderScreen

const styles = StyleSheet.create({
    calenderScreen:{
        padding:"10px",
    }
})