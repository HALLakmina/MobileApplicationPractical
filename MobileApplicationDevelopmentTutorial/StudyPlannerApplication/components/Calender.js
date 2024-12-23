import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, TouchableOpacity } from 'react-native-web'
import MainContext from '../ContextAPI/AppMainContext'

const Calender = ({openNoteBook, getSelectedDate}) => {
    const {dayPlans, category} = useContext(MainContext)
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

    console.log(currentYear)
    useEffect(() => {
        const firstDays = new Date(currentYear, currentMonth, 1).getDay()
        setFirstDayOfMonth(firstDays)

        const  lastDate= new Date(currentYear, currentMonth + 1, 0).getDate()
        setLastDateOfMonth(lastDate);

        const  lastDay= new Date(currentYear, currentMonth + 1, 0).getDay()
        setLastDayOfMonth(lastDay);

        const  lastDatesOfLastMonth= new Date(currentYear, currentMonth, 0).getDate()
        setLastDateOfPrevMonth(lastDatesOfLastMonth);
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
        let getDates =[]
        for(let i = 1; i <= firstDayOfMonth; i++){
            dayPlans.filter((index)=>{
                if(index.date.year === currentYear && index.date.month === (currentMonth) && index.date.day === lastDateOfPrevMonth - i + 1){
                    getDates.push(i)
                    return true;
                }
                return false;
            })
        }
        for(let i = firstDayOfMonth; i > 0; i--){
            daysOfMonth.push(
            <TouchableOpacity key={i} onPress={()=>noteBookHandler((lastDateOfPrevMonth - i + 1), (currentMonth))}>
                {dayPlans.map((data, index)=>{
                    if(index === 0){
                        if(getDates.find((indexValue)=> indexValue === i)){
                            return<Text style={{...styles.prevNextItemBox,  backgroundColor:category[0].color}} key={index}>{lastDateOfPrevMonth - i + 1}</Text>
                        }
                        else{
                            return <Text style={{...styles.prevNextItemBox}} key={index}>{lastDateOfPrevMonth - i + 1}</Text>
                        }
                    }
                })}
            </TouchableOpacity>
            )
        }
        getDates =[]
        for(let i = 1; i <= lastDateOfMonth; i++){
            dayPlans.filter((index)=>{
                if(index.date.year === currentYear && index.date.month === (currentMonth+1) && index.date.day === i){
                    getDates.push(i)
                    return true;
                }
                return false;
            })
        } 
        for(let i = 1; i <= lastDateOfMonth; i++){
            daysOfMonth.push(
            <TouchableOpacity key={i+50} onPress={()=>noteBookHandler(i, (currentMonth+1))}>
                {dayPlans.map((data, index)=>{
                    if(index === 0){
                        if(getDates.find((indexValue)=> indexValue === i)){
                            return<Text style={{...styles.itemBox, backgroundColor:category[0].color}} key={index}>{i}</Text>
                        }
                        else{
                            return <Text style={{...styles.itemBox,}} key={index}>{i}</Text>
                        }
                    }
                })}
            </TouchableOpacity>
            )
        }
        getDates =[]
        for(let i = lastDayOfMonth; i < 6; i++){
            dayPlans.filter((index)=>{
                if(index.date.year === currentYear && index.date.month === (currentMonth+2) && index.date.day === (i - lastDayOfMonth + 1)){
                    getDates.push(i - lastDayOfMonth + 1)
                    return true;
                }
                return false;
            })
        }
        for(let i = lastDayOfMonth; i < 6; i++){
            daysOfMonth.push(
            <TouchableOpacity key={i+31} onPress={()=>noteBookHandler((i - lastDayOfMonth + 1), (currentMonth+2))}>
            {dayPlans.map((data, index)=>{
                if(index === 0){
                    if(getDates.find((indexValue)=> indexValue === (i - lastDayOfMonth + 1) )){
                        return <Text style={{...styles.prevNextItemBox, backgroundColor:category[0].color}} key={index}>{i - lastDayOfMonth + 1}</Text>
                    }
                    else{
                        return <Text style={{...styles.prevNextItemBox}} key={index}>{i - lastDayOfMonth + 1}</Text>
                    }
                }
            })}
            </TouchableOpacity>
            )
        }
        return daysOfMonth
    }
    const nextPrevHandler =(detraction) => {
        if(detraction === "<"){
            if(currentMonth-1 != -1){
                setCurrentMonth(currentMonth-1)
            }
            else{
                setCurrentMonth(11)
                setCurrentYear(currentYear-1)
            }
        }else{
            if(currentMonth-1 != 10){
                setCurrentMonth(currentMonth+1)
            }
            else{
                setCurrentMonth(0)
                setCurrentYear(currentYear+1)
            }
        }
    }
    const noteBookHandler = (date, month)=>{
        if(month>12){
            getSelectedDate({year:currentYear, month:1, day:date})
        }
        else if(month<1){
            getSelectedDate({year:currentYear, month:12, day:date})
        }
        else(
            getSelectedDate({year:currentYear, month:month, day:date})
        )
        openNoteBook(true)
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