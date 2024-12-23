import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { updateCategoryById } from '../APIs/Category'
import MainContext from '../ContextAPI/AppMainContext'
import { Button, TextInput } from 'react-native-web'
import ColorPicker, { HueSlider, Panel1, Preview } from 'reanimated-color-picker'

const CategoryUpdate = ({closeNoteBook, details}) => {
    const {eventHandler} = useContext(MainContext)

    const categoryObj = {title:"", color:""}
    const [category, SetCategory] = useState(details)
 
    const onSelectColor = ({ hex }) => {
        SetCategory({...category , color: hex})
    };
    const inputHandler =(e)=>{
        const {value} = e.target
        SetCategory({...category , title: value})
    }
    const updateHandler = async ()=>{
        try{
            const {id, ...payload} = category
            const response = await updateCategoryById(id, payload)
            console.log(response)
            eventHandler('GET_ALL_CATEGORY')
            closeForm()
        }catch(e){
            console.log(e)
        }
    }
    const fromReset = ()=>{
        SetCategory(categoryObj)
        closeNoteBook(false)
    }
    const closeForm = ()=>{
        fromReset()
    }
    return (
        <View style={styles.settingScreen}>
        <View>
            <View style={{display: 'flex',alignItems: 'flex-end'}}>
                <Button color={"red"} title='X' onPress={()=>closeForm()}/>
            </View>
            <Text style={styles.title}>Update Category</Text>
            <View style={styles.categoryCreateBox}>
            <TextInput 
                placeholder='Category Name' 
                style={styles.inputField}
                onChange={(e)=>inputHandler(e)}
                value={category?.title||""}
                />
            <Text style={styles.subTitle}>Pick Color For Category</Text>
            <ColorPicker style={{ width: '100%',marginVertical:"10px" }} value={category?.color||'red'} onComplete={onSelectColor}>
                <Preview />
                <Panel1 />
                <HueSlider />
            </ColorPicker>
            <Button title='Update +' onPress={()=>updateHandler()}/>
            </View>
        </View>
        </View>
    )
}

export default CategoryUpdate

const styles = StyleSheet.create({
    settingScreen:{
        padding:"10px"
    },
    title:{
      fontSize:"18px",
      fontWeight:"bold",
      color:"white",     
    },
    categoryCreateBox:{
      borderTopWidth:"1px",
      borderTopColor:"white",
      marginTop:"10px"
    },
    subTitle:{
      fontSize:"16px", 
      color:"white",    
    },
    inputField:{
      borderRadius:'5px',
      padding:"5px",
      marginVertical:"10px",
      backgroundColor:"lightgray",
    }
})