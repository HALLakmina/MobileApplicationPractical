import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, ScrollView, TextInput, FlatList } from 'react-native-web'
import FamilyMemberBox from './FamilyMemberBox'
import EducatingDetailsBox from './EducatingDetailsBox'

import validator from 'validator';

const Form = () => {
    const personalDetailsObj={name:"", age:"", address:""}
    const profilePictureObj={name:"", type:"", location:""}
    const familyDetailsObj={familyMember:"", relationship:""};
    const educationDetailsValue=''

    const [personalDetails, setPersonalDetails] = useState(personalDetailsObj)
    const [familyDetails, setFamilyDetails] = useState(familyDetailsObj)
    const [allFamilyMembers, setAllFamilyMembers] = useState([])
    const [educationDetails, setEducationDetails] = useState(educationDetailsValue)
    const [allEducationCodifications, setAllEducationCodifications] = useState([])

    const inputPersonalHandler=(e)=>{
        const {value, id} = e.target
        const keyExist = personalDetailsObj.hasOwnProperty(id)
        if (keyExist){
            let obj={}
            obj[id] = value
            setPersonalDetails({...personalDetails, ...obj})
        }
    }

    const inputFamilyHandler = (e)=>{
        const {value, id} = e.target
        const keyExist = familyDetailsObj.hasOwnProperty(id)
        if (keyExist){
            let obj={}
            obj[id] = value
            setFamilyDetails({...familyDetails, ...obj})
        }
    }

    const inputEducationHandler = (e)=>{
        const {value, id} = e.target
        if (id === "graduatedLevel"){
            setEducationDetails(value)
        }
    }

    const submitFamilyHandler = ()=>{
        if(validator.isAlpha(familyDetails.familyMember) || validator.isAlphanumeric(familyDetails.familyMember) ){
            alert("Input Valid familyMember Name")
        }
        else if(validator.isAlpha(familyDetails.relationship) || validator.isAlphanumeric(familyDetails.relationship) ){
            alert("Input Valid relationship")
        } 
        else{
            setAllFamilyMembers([...allFamilyMembers, familyDetails])
            cleanFamilyHandler()
        }
    }

    const submitEducationHandler = ()=>{
        if(validator.isAlpha(educationDetails) || validator.isAlphanumeric(educationDetails) ){
            alert("Input Valid Education")
        }
        else{
            setAllEducationCodifications([...allEducationCodifications, educationDetails])
            cleanEducationHandler()
        }
    }

    const submitHandler=()=>{
        inputValidator()
        cleanPersonalHandler()
        cleanAllFields()
    }
    const cleanAllFields=()=>{
        setAllFamilyMembers([])
        setAllEducationCodifications([])
    }
    const cleanPersonalHandler = ()=>{
        setPersonalDetails(personalDetailsObj)
    }
    const cleanFamilyHandler =()=>{
        setFamilyDetails(familyDetailsObj)
    }
    const cleanEducationHandler =()=>{
        setEducationDetails(educationDetailsValue)
    }

    const inputValidator =()=>{
        let isValid = true;
        if(validator.isAlpha(personalDetails.name) || validator.isAlphanumeric(personalDetails.name)){
            alert("Input Valid Name")
            isValid = false;
        }

        if(validator.isAlpha(personalDetails.address) || validator.isAlphanumeric(personalDetails.address)){
            alert("Input Valid Address")
            isValid = false;
        }

        if(isNaN(personalDetails.age)){
            alert("Input Age as a number")
            isValid = false;
        }
        else if(personalDetails.age>120){
            alert("Input Age not lese than 120")
            isValid = false;
        }
    }
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Student Information fill Form</Text>
        <View>
            <Text style={styles.subTitle}>Personal Information</Text>
            <TextInput 
                placeholder="Name" 
                style={styles.inputField}
                aria-required={true}
                id='name'
                onChange={(e)=>inputPersonalHandler(e)}
                value={personalDetails.name || ''}
            />
            <TextInput 
                placeholder="age" 
                style={styles.inputField}
                aria-required={true}
                id='age'
                keyboardType="numeric"
                onChange={(e)=>inputPersonalHandler(e)}
                value={personalDetails.age || ''}
            />
            <TextInput 
                placeholder="Address" 
                style={styles.inputField}
                aria-required={true}
                id='address'
                maxLength={120}
                onChange={(e)=>inputPersonalHandler(e)}
                value={personalDetails.address || ''}
            />
        </View>
        <View>
            <Text style={styles.subTitle}>Family Information</Text>
            <TextInput 
                placeholder="Family member name" 
                style={styles.inputField}
                aria-required={true}
                id='familyMember'
                onChange={(e)=>inputFamilyHandler(e)}
                value={familyDetails.familyMember||''}
            />
            <TextInput 
                placeholder="Relationship" 
                style={styles.inputField}
                aria-required={true}
                id='relationship'
                onChange={(e)=>inputFamilyHandler(e)}
                value={familyDetails.relationship||''}
            />
            <Button title="Add +" onPress={()=>submitFamilyHandler()} disabled={familyDetails.familyMember && familyDetails.relationship ? false : true}/>
        </View>
        <FlatList
            data={allFamilyMembers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <FamilyMemberBox details={item}/>
            )}
        />
        <View>
            <Text style={styles.subTitle}>Education Information</Text>
            <TextInput 
                placeholder="Graduated level"
                style={styles.inputField}
                aria-required={true}
                id='graduatedLevel'
                onChange={(e)=>inputEducationHandler(e)}
                value={educationDetails || ''}
            />
            <View style={{marginBottom:"10px"}}>
                <Button title="Add +" onPress={()=>submitEducationHandler()} disabled={educationDetails ? false : true}/>
            </View>
            <FlatList
                data={allEducationCodifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <EducatingDetailsBox details={item}/>
                )}
            />
        </View>
        <Button 
            title="Submit Data" 
            onPress={()=>submitHandler()}
            disabled={personalDetails.address && personalDetails.age && personalDetails.name && allFamilyMembers.length>0 && allEducationCodifications.length>0 ? false : true}
        />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    form:{
        minWidth:"320px",
        maxWidth:"480px",
        height:"100%",
        width: '100%',
        backgroundColor:"white",
        padding:"10px"
    },
    title:{
        fontSize:"24px",
        fontWeight:"bold",
        textTransform:"uppercase",
        textAlign:"center",
        marginVertical:"20px"
    },
    subTitle:{
        fontSize:"16px",
        fontWeight:"bold",
        textTransform:"uppercase",
        marginVertical:"10px"
    },
    inputField:{
        border:"1px solid black",
        padding:"10px",
        borderRadius:"10px",
        marginVertical:"10px",
    }
})