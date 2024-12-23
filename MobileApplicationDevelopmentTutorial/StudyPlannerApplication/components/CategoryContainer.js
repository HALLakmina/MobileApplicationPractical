import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-native-web'
import CategoryUpdate from './CategoryUpdate'
import { deleteCategoryById } from '../APIs/Category'
import MainContext from '../ContextAPI/AppMainContext'

const CategoryContainer = ({details}) => {
    const {eventHandler} = useContext(MainContext)
    const [visible, setVisible] = useState(false)
    const categoryDeleteHandler = async () =>{
        try{
        const request = await deleteCategoryById(details?.id)
        console.log(request)
        eventHandler("GET_ALL_CATEGORY")
        }catch(e){
        console.log(e)
        }
    }
    const categoryUpdateHandler = () =>{
        setVisible(true)
    }
  return (
    <View style={{...styles.categoryContainer, backgroundColor:details.color} }>
        <Text style={styles.categoryName}>{details.title}</Text>
        <View style={styles.categoryButtonContainer}>
            <View style={styles.buttonView}>
                <Button title='Update' color='green' onPress={() =>categoryUpdateHandler()}/>
            </View>
            <View style={styles.buttonView}>
                <Button title='Delete' color='red' onPress={() =>categoryDeleteHandler()}/>
            </View>
        </View>
        <Modal visible={visible} transparent={true}>
            <View style={styles.modal}>
                <CategoryUpdate closeNoteBook={setVisible} details={details}/>
            </View>
      </Modal>
    </View>
  )
}

export default CategoryContainer

const styles = StyleSheet.create({
    categoryContainer:{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"lightgray",
        padding:"5px",
        margin:"5px",
        borderRadius:"10px",
    },
    categoryButtonContainer:{
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:"100%",
        marginTop:"20px"
    },
    categoryName:{
        fontSize:"16px",
        fontWeight:"bold",
        backgroundColor:"black",
        color:"white",
        padding:"5px",
        marginTop:"5px",
        borderRadius:"5px"
    },
    buttonView:{
        margin:"5px",
    },
    modal: {
      padding:"10px",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
})