import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TouchableOpacity } from 'react-native-web'

const Calender = () => {
    // const timetable = {year:"",month:"",week:"",day:""}
    const months=   ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"]
    const date = new Date()
    const [currentDate, setCurrentDate] = useState(date)
    const [currentYear, setCurrentYear] = useState(date.getFullYear())
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())
    const [firstDayOfMonth, setFirstDayOfMonth] = useState('')
    const [lastDateOfMonth, setLastDateOfMonth] = useState('')
    const [lastDayOfMonth, setLastDayOfMonth] = useState('')
    const [lastDateOfPrevMonth, setLastDateOfPrevMonth] = useState('')
    // const [daysOfMonth, setDaysOfMonth] = useState([])

    useEffect(() => {
        const firstDays = new Date(currentYear, currentMonth, 1).getDay()
        setFirstDayOfMonth(firstDays)

        const  lastDate= new Date(currentYear, currentMonth + 1, 0).getDate()
        setLastDateOfMonth(lastDate);

        const  lastDay= new Date(currentYear, currentMonth + 1, 0).getDay()
        setLastDayOfMonth(lastDay);

        const  lastDatesOfLastMonth= new Date(currentYear, currentMonth, 0).getDate()
        setLastDateOfPrevMonth(lastDatesOfLastMonth);

        // console.log(firstDays, lastDay, lastDatesOfLastMonth)
    },[])

    useEffect(()=>{
        const firstDays = new Date(currentYear, currentMonth, 1).getDay()
        setFirstDayOfMonth(firstDays)

        const  lastDate= new Date(currentYear, currentMonth + 1, 0).getDate()
        setLastDateOfMonth(lastDate);

        const  lastDay= new Date(currentYear, currentMonth + 1, 0).getDay()
        setLastDayOfMonth(lastDay);

        const  lastDatesOfLastMonth= new Date(currentYear, currentMonth, 0).getDate()
        setLastDateOfPrevMonth(lastDatesOfLastMonth);
    },[currentMonth])

    const days= ()=> {
        const daysOfMonth =[]
        for(let i = firstDayOfMonth; i > 0; i--){
            daysOfMonth.push(
            <TouchableOpacity key={i}>
                <Text style={styles.prevNextItemBox}>{lastDateOfPrevMonth - i + 1}</Text>
            </TouchableOpacity>
            )
            console.log("<<<<", lastDateOfPrevMonth - i+1)
        }
        for(let i = 1; i <= lastDateOfMonth; i++){
            daysOfMonth.push(
            <TouchableOpacity key={i+50}>
                <Text style={styles.itemBox}>{i}</Text>
            </TouchableOpacity>
            )
            console.log("ok")
        }
        for(let i = lastDayOfMonth; i < 6; i++){
            daysOfMonth.push(
            <TouchableOpacity key={i+31}>
                <Text style={styles.prevNextItemBox}>{i - lastDayOfMonth + 1}</Text>
            </TouchableOpacity>
            )
            console.log(">>>>", i - lastDayOfMonth + 1)
        }
        return daysOfMonth
    }
    const nextPrevHandler =(detraction) => {
        const newMonth = detraction === "<" ? setCurrentMonth(currentMonth-1): setCurrentMonth(currentMonth+1)
    }
  return (
    <View style={styles.calender}>
        <View style={styles.titleBox}>
            <View style={styles.monthYear}>
                <Text style={styles.month}>{months[currentMonth]}</Text>
                <Text style={styles.year}>{currentYear}</Text>
            </View>
            <View style={styles.buttonBox}>
                <Button title="<" onPress={()=>nextPrevHandler("<")}/>
                <Button title='>' onPress={()=>nextPrevHandler(">")}/>
            </View>
        </View>
        <View style={styles.dateBox}>
            <View style={styles.weeks}>
                <Text style={styles.itemBox}>Sun</Text>
                <Text style={styles.itemBox}>Mon</Text>
                <Text style={styles.itemBox}>Tue</Text>
                <Text style={styles.itemBox}>Wed</Text>
                <Text style={styles.itemBox}>Thu</Text>
                <Text style={styles.itemBox}>Fir</Text>
                <Text style={styles.itemBox}>Sat</Text>
            </View>
            <View style={styles.days}>
                {days()}
            </View>
        </View>
    </View>
  )
}

export default Calender

const styles = StyleSheet.create({
    calender:{
        display:"flex",
        flexDirection:"column",
        minWidth:"320px",
        maxWidth:"480px",
        width:"100%",
        alignItems:"center",
        backgroundColor:"lightgray",
        borderRadius:"15px",
        padding:"10px",
    },
    titleBox:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
    },
    monthYear:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    month:{
        fontSize:"20px",
        fontWeight:"bold",
    },
    year:{
        fontSize:"20px",
        fontWeight:"bold",
        paddingLeft:"8px"
    },
    buttonBox:{
        display:"flex",
        flexDirection:"row",
    },
    dateBox:{
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        width:"100%"
    },
    weeks:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        textAlign:"center",
        width:"100%",
    },
    days:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        textAlign:"center",
        width:"100%",
    },
    itemBox:{
        width:`${100/8}vw`,
        height:"30px",
        textAlign:"center",
    },
    prevNextItemBox:{
        width:`${100/8}vw`,
        height:"30px",
        textAlign:"center",
        color:"gray"
    }
})