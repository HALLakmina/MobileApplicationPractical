import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, ScrollView, TextInput } from 'react-native-web'
import ColorPicker, { Panel1, Preview,HueSlider } from 'reanimated-color-picker';
import CategoryList from '../../components/CategoryList';
import { createCategory } from '../../APIs/Category';
import MainContext from '../../ContextAPI/AppMainContext';

const SettingScreen = () => {
    const {eventHandler} = useContext(MainContext)
  const categoryObj = {title:"", color:""}
  const [categoryDetails, setCategoryDetails] = useState(categoryObj)

    const onSelectColor = ({ hex }) => {
      setCategoryDetails({...categoryDetails , color: hex})
    };
    const inputHandler =(e)=>{
      const {value} = e.target
      setCategoryDetails({...categoryDetails , title: value})
    }
    const submitHandler = async ()=>{
      try{
        const response = await createCategory(categoryDetails)
        console.log(response)
        eventHandler("GET_ALL_CATEGORY")
      }catch(e){
        console.log(e)
      }
    }
  return (
    <ScrollView>
      <View style={styles.settingScreen}>
        <View>
          <Text style={styles.title}>Create Category</Text>
          <View style={styles.categoryCreateBox}>
            <TextInput 
              placeholder='Category Name' 
              style={styles.inputField}
              onChange={(e)=>inputHandler(e)}
              value={categoryDetails.title||""}
              />
            <Text style={styles.subTitle}>Pick Color For Category</Text>
            <ColorPicker style={{ width: '100%',marginVertical:"10px" }} value='red' onComplete={onSelectColor}>
                <Preview />
                <Panel1 />
                <HueSlider />
            </ColorPicker>
            <Button title='Add +' onPress={()=>submitHandler()}/>
          </View>
        </View>
        <CategoryList/>
      </View>
    </ScrollView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    settingScreen:{
        padding:"10px"
    },
    title:{
      fontSize:"18px",
      fontWeight:"bold"     
    },
    categoryCreateBox:{
      borderTopWidth:"1px",
      marginTop:"10px"
    },
    subTitle:{
      fontSize:"16px",     
    },
    inputField:{
      borderRadius:'5px',
      padding:"5px",
      marginVertical:"10px",
      backgroundColor:"lightgray",
    }
})