import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Calender from '../../components/Calender'
import { Modal } from 'react-native-web'
import NoteBook from '../../components/NoteBook'

const CalenderScreen = () => {
  const selectedDateObject = {year:"", month:"", day:""}
  const [visible, setVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(selectedDateObject)
  return (
    <View style={styles.calenderScreen}>
      <Calender openNoteBook={setVisible} getSelectedDate={setSelectedDate}/>
      <Modal visible={visible} transparent={true}>
        <View style={styles.modal}>
          <NoteBook closeNoteBook={setVisible} addSelectedDate={selectedDate}/>
        </View>
      </Modal>
    </View>
  )
}

export default CalenderScreen

const styles = StyleSheet.create({
    calenderScreen:{
        padding:"10px",
    },
    modal: {
      padding:"10px",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
})