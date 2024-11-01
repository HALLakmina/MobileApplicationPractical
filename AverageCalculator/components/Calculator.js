import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import CalculationResult from './CalculationResult'
import ErrorAlert from './ErrorAlert'

const Calculator = () => {
    const [subjectValues, setSubjectValues] = useState({
            firstSubject:null, 
            secondSubject:null, 
            thirdSubject:null,
        })
        const [student, setStudent] = useState({
            firstName:'',
            lastName:'',
            email:'',
            password:''
        })
    const [average, setAverage] = useState(0)
    const [isValid, setIsValid] = useState(true)
    const [isShowResult, setIsShowResult] = useState(false)
    

    const handleStudentValue = (e, name) => {
        e.defaultPrevented = true
        const {value} = e.target
        const isKeyExist = student.hasOwnProperty(name)
        if(isKeyExist){
            const obj = {}
            obj[name] = value
            setStudent({...student, ...obj})
        }
    }

    const handleValueChange = (e, name) =>{
        e.defaultPrevented = true
        const {value} = e.target
        const isKeyExist = subjectValues.hasOwnProperty(name)
        if(isKeyExist){
            if(!isNaN(value)){
                const obj = {}
                obj[name] = value
                setSubjectValues({...subjectValues, ...obj})
            }else{
                setIsValid(false)
                setTimeout(()=>{
                    setIsValid(true)
                },1000)
            }
        }
    }
    const calculateAverage = ()=>{
        let total=0;
        let values = Object.values(subjectValues)
        values.map((index, value)=>(
            total += parseInt(index)
        ))
        setAverage(total/3)
        setIsShowResult(true)
    }
    return (
        <View style={styles.calculatorContentContainer}>
            <Text style={styles.title}>Student Registration</Text>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    placeholder='First Name'
                    onChange={(e)=>(e, 'firstName')}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    keyboardType='name-middle'
                    placeholder='Last Name'
                    onChange={(e)=>handleStudentValue(e, 'lastName')}
                    value={student.lastName||''}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    keyboardType='email-address'
                    placeholder='Email'
                    onChange={(e)=>handleStudentValue(e, 'email')}
                    value={student.email||''}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    secureTextEntry={true}
                    keyboardType='password'
                    placeholder='Password'
                    onChange={(e)=>handleStudentValue(e, 'password')}
                    value={student.password||''}
                />
            </View>
            <Text style={styles.title}>Enter Marks</Text>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    inputMode='numeric'
                    keyboardType="numeric"
                    placeholder='Subject 1 Marks'
                    onChange={(e)=>handleValueChange(e, 'firstSubject')}
                    value={subjectValues.firstSubject||''}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.inputBoxes}
                    inputMode='numeric'
                    keyboardType="numeric"
                    placeholder='Subject 2 Marks'
                    onChange={(e)=>handleValueChange(e, "secondSubject")}
                    value={subjectValues.secondSubject||''}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.inputBoxes}
                    inputMode='numeric'
                    keyboardType="numeric"
                    placeholder='Subject 3 Marks'
                    onChange={(e)=>handleValueChange(e, "thirdSubject")}
                    value={subjectValues.thirdSubject||''}
                />
            </View>
            <Button title='REGISTER & CALCULATE AVERAGE' onPress={()=>calculateAverage()} disabled={subjectValues.firstSubject && subjectValues.secondSubject && subjectValues.thirdSubject ? false : true}/>
            {isValid ? '' : <ErrorAlert/>}
            {isShowResult ? <CalculationResult studentDetails={student} subjects={subjectValues} average={average}/>: ''}
            
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    calculatorContentContainer:{ 
        padding:"10px",
        borderRadius:"10px",
        backgroundColor: '#FFFFFF',
    },
    title:{
        fontSize:"20px",
        fontWeight:'bold',
        fontFamily:"calibri",
        textAlign:"center",
        margin:'10px'
    },
    inputBoxes:{
        padding: "5px",
        marginVertical: "5px",
        border: "1px black solid",
    },
    outputBox:{
        padding: "10px",
        textAlign:"center",
        fontWeight:"bold",
    }
})