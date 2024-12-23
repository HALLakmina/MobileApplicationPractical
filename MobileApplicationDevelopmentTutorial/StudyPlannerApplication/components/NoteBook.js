import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, TextInput, TouchableOpacity } from 'react-native-web'
import { createDayPlans, deleteDayPlansById, updateDayPlansById } from '../APIs/DayPlans'
import MainContext from '../ContextAPI/AppMainContext'
import DropDownPicker from 'react-native-dropdown-picker';

const NoteBook = ({closeNoteBook, addSelectedDate}) => {

  const {dayPlans=[], category=[], eventHandler} = useContext(MainContext)

  const inputObj = {title:"", note:"", categoryId:"", date:addSelectedDate}
  const [userInputs, setUserInputs] = useState(inputObj)
  const [isCreated, setIsCreated] = useState(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(addSelectedDate);
  const [newCategory, setNewCategory] = useState([])

  useEffect(()=>{
    setUserInputs({...userInputs, categoryId:value})
  },[value])
  useEffect(()=>{
    dayPlans.filter((index)=>{
      if(index.date.year === addSelectedDate.year && index.date.month === addSelectedDate.month && index.date.day === addSelectedDate.day){
        return index
      }else{
        return false
      }
    }).map((date,index)=>{
      setUserInputs({...date})
      setIsCreated(true)
    })
    let newObj={}
    let newArray=[]
    for(let i=0; i < category.length; i++){
      newObj["label"] = category[i]?.title
      newObj["value"] = category[i]?.id
      newArray.push(newObj)
      newObj={}
    }
    setNewCategory(newArray)
  },[])
  const cleanForme = ()=>{
    closeNoteBook(false);
    setUserInputs({})
  }

  const inputHandler = (e, name)=>{
    const {value} = e.target
    const keyExist = inputObj.hasOwnProperty(name)
    if (keyExist) {
      let obj ={}
      obj[name] = value
      setUserInputs({...userInputs, ...obj})
    }
  }

  const noteSubmitHandler = async()=>{
    try{
      if(!isCreated){
        const request = await createDayPlans(userInputs)
        setUserInputs(request)
        cleanForme()
        eventHandler("GET_ALL_DAY_PLANS")
      }else{
        const {id, ...restData} = userInputs
        const request = await updateDayPlansById(id, restData)
        console.log(request)
        cleanForme()
        eventHandler("GET_ALL_DAY_PLANS")
      }
    }catch(e){
      console.log(e)
    }
  }

  const noteCleanHandler = async()=>{
    try{
      const request = await deleteDayPlansById(userInputs?.id)
      console.log(request)
      setUserInputs({})
      eventHandler("GET_ALL_DAY_PLANS")
    }catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.notePad}>
        <View style={{display:"flex",alignItems: "flex-end"}}>
        <Button title="X" color="red" onPress={() =>cleanForme()}/>
        </View>
        <TextInput 
          placeholder='Title' 
          style={styles.inputField} 
          onChange={(e)=>inputHandler(e, "title")}
          value={userInputs?.title||""}
        />
        <DropDownPicker
          open={open}
          value={userInputs.categoryId}
          items={newCategory}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setNewCategory}
        />
        <TextInput 
          placeholder='Note' 
          style={styles.inputField} 
          rows={10} 
          multiline 
          onChange={(e)=>inputHandler(e, "note")}
          value={userInputs?.note||""}
        />
        <Button title={"Add To Calender"} onPress={()=>noteSubmitHandler()}/>

          <View style={{display:"flex",alignItems: "flex-end",width: "100%", marginVertical:"10px"}}>
            <Button title={"Clean"} color="red" onPress={()=>noteCleanHandler()}/>
          </View>
    </View>
  )
}

export default NoteBook

const styles = StyleSheet.create({
    notePad:{
        marginTop:"20px",
        width: '100%',
    },
    inputField:{
        padding:"5px",
        marginVertical:"5px",
        borderRadius:"10px",
        backgroundColor:"lightgray"
    }
})