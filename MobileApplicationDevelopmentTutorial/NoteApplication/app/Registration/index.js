import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormBackground from '../../components/FormBackground'
import HeadingText from '../../components/HeadingText'
import CustomInput from '../../components/CustomInput'
import MainViewWrap from '../../components/MainViewWrap'
import { checkUsers, createUsers } from '../../APIS/userAPIS'
import { TouchableOpacity } from 'react-native-web'

const Registration = ({navigation}) => {
  const userDataProperty = {name:"", user_name:"",e_mail:"",registration_no:"",index_no:"",password:"", confirm_password:"",}
  const [userData, setUserData] = useState(userDataProperty)

  const inputHandler = (e, name)=>{
    const {value} = e.target
    const keyIsExist = userData.hasOwnProperty(name)
    if (keyIsExist) {
      let obj={}
      obj[name] = value
      setUserData({...userData, ...obj})
    }
  }

  const submitHandle = async()=>{
    try{
      if(userData.password === userData.confirm_password){
        const response = await checkUsers()
        let userNameNotExist = [] 
        userNameNotExist = response.filter((data, index)=>{
          if(data?.user_name === userData.user_name ){
            return true
          }
          return false
        })
        if(!userNameNotExist.length>0){
          const response = await createUsers({name:userData.name, user_name:userData.user_name, e_mail:userData.e_mail, registration_no:userData.registration_no, index_no:userData.index_no, password:userData.password})
          if(response === 201){
            navigation.navigate('Login')
          }
        }
        else{
          alert("This User Name All Ready Exist")
          resetUserName()
        }
      }else{
        resetPassword()
        alert("Please enter correct password")
      }
    }catch(e){
      console.log(e)
    }
  }
  const resetPassword = ()=>{
    setUserData({...userData, password:"", confirm_password:""})
  }
  const resetUserName = ()=>{
    setUserData({...userData, user_name:""})
  } 
  return (
    <MainViewWrap>
      <FormBackground>
        <HeadingText>       
          Registration 
        </HeadingText>
        <CustomInput 
          placeholder="Name"
          onChange={(e)=>inputHandler(e,"name")}
          value={userData.name}
        />
        <CustomInput 
          placeholder="User Name"
          onChange={(e)=>inputHandler(e,"user_name")}
          value={userData.user_name}
        />
        <CustomInput 
          placeholder="E-mail" 
          keyboardType={'email-address'} 
          onChange={(e)=>inputHandler(e,"e_mail")}
          value={userData.e_mail}
        />
        <CustomInput 
          placeholder="Registration no"
          onChange={(e)=>inputHandler(e,"registration_no")}
          value={userData.registration_no}
        />
        <CustomInput 
          placeholder="Index no"
          onChange={(e)=>inputHandler(e,"index_no")}
          value={userData.index_no}
        />
        <CustomInput 
          placeholder="Password" 
          secureTextEntry={true}
          onChange={(e)=>inputHandler(e,"password")}
          value={userData.password}
        />
        <CustomInput 
          placeholder="Confirm password" 
          secureTextEntry={true}
          onChange={(e)=>inputHandler(e,"confirm_password")}
          value={userData.confirm_password}
        />
        <Button title='Registration' onPress={()=>submitHandle()}/>

        <Text style={{textAlign:"center", marginVertical:"10px"}}>
          I have account 
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{color:"blue"}}>
            <Text> sign in</Text>
          </TouchableOpacity>
        </Text>
      </FormBackground>
    </MainViewWrap>
  )
}

export default Registration

const styles = StyleSheet.create({})