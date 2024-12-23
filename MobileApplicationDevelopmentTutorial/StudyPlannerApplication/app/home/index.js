import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList, ScrollView } from 'react-native-web'
import NoteBox from '../../components/NoteBox'
import MainContext from '../../ContextAPI/AppMainContext'

const HomeScreen = () => {
  const {dayPlans} = useContext(MainContext)

  return (
    <ScrollView>
      <View style={styles.homeScreen}>
        <Text style={styles.mainTitle}>Welcome Back</Text>
        <View>
          <Text style={styles.subTitle}>To day planes</Text>
          <FlatList 
            data={dayPlans}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NoteBox details={item}/>
            )}
            />
        </View>
      </View>
    </ScrollView>
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