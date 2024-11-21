import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/CustomView'
import InputField from '@/components/InputField'
import CustomButton from '../../components/CustomButton'
import UserContext from '@/ContextAPI/UserContext'

const Index = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({name:'', email:'', password:'', confirmedPassword:''})
  const [isCorrectPassword, setIsCorrectPassword] = useState(true)

  const {userInformation={}, controlEvents} = useContext(UserContext)
  
  const inputHandler = (e, name)=>{
    const {value} = e.target
    const keyExcide = userDetails.hasOwnProperty(name)
    if(keyExcide){
      let obj = {}
      obj[name] = value
      setUserDetails({...userDetails, ...obj})
    }
  }
  const submitHandler = async ()=>{
    if(userDetails.password === userDetails.confirmedPassword){
      controlEvents("registration",{ name: userDetails.name, email: userDetails.email, password: userDetails.password })
      console.log("valueEnter", userInformation)
      navigation.navigate('Login')
    }else{
      setUserDetails({...userDetails, password:'', confirmedPassword:''})
      setIsCorrectPassword(false)
      setTimeout(()=>{
        setIsCorrectPassword(true)
      },1500)
    }
  }
  return (
    <CustomView>
        <Text style={styles.topic}>MY LOGIN APP</Text>
        <InputField 
          placeholder={"Enter your name"}
          onChange={(e)=>inputHandler(e, "name")}
          value={userDetails.name}
        />
        <InputField 
          placeholder={"Enter your Email"} 
          onChange={(e)=>inputHandler(e, "email")}
          value={userDetails.email}
        />
        <InputField 
          placeholder={"Password"} 
          onChange={(e)=>inputHandler(e, 'password')}
          value={userDetails.password}
          secureTextEntry={true}
        />
        <InputField 
          placeholder={"Confirmed Password"} 
          onChange={(e)=>inputHandler(e, 'confirmedPassword')}
          value={userDetails.confirmedPassword}
          secureTextEntry={true}
        />
        <View style={{width: "100%"}}>
            <CustomButton title={"Sign UP"} onPress={()=>submitHandler()}/>
        </View>
    </CustomView>
  )
}

export default Index

const styles = StyleSheet.create({
    topic:{
        color:'white',
        textAlign:'center',
        fontSize:"25px",
    },
})