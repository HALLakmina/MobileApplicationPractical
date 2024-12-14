import { Button, StyleSheet, Text} from 'react-native'
import React, { useContext, useState } from 'react'
import FormBackground from '../../components/FormBackground'
import CustomInput from '../../components/CustomInput'
import HeadingText from '../../components/HeadingText'
import MainViewWrap from '../../components/MainViewWrap'
import { checkUsers } from '../../APIS/userAPIS'
import { TouchableOpacity } from 'react-native-web'
import RootContext from '../../ContextAPI/DataHandlerContext'

const Login = ({navigation}) => {
  const loginProperty ={user_name:'', password:''}
  const [userData, setUserData] = useState(loginProperty)

  const {rootDataHandler}= useContext(RootContext)

  const resetData = ()=>{
    setUserData(loginProperty)
  }

  const verifyLoginData = async()=>{
    const response = await checkUsers()
    let isNotValid =[] 
    isNotValid = response.filter((data, index)=>{
      if(data?.user_name === userData.user_name && data?.password === userData.password){
        rootDataHandler("SetUserID", data.id)
        navigation.navigate('Home')
        return true
      }
      return false
    })
    if(!isNotValid.length>0){
      alert("Worn User Name or Password")
      resetData()
    }
  }

  const loginHandler = (e, name)=>{
    const {value} = e.target
    const keyIsExist = loginProperty.hasOwnProperty(name)
    if (keyIsExist) {
      let obj={}
      obj[name] = value
      setUserData({...userData, ...obj})
    }
  }
  const loginSubmitHandler = ()=>{
    verifyLoginData()
  }
  return (
    <MainViewWrap>
      <FormBackground>
          <HeadingText>
              Login
          </HeadingText>
          <CustomInput 
            placeholder="user name" 
            keyboardType={'email-address'} 
            onChange={(e)=>loginHandler(e, "user_name")}
            value={userData.user_name}
          />
          <CustomInput 
            placeholder="password" 
            secureTextEntry={true} 
            onChange={(e)=>loginHandler(e, "password")}
            value={userData.password}
          />
          <Button title='LOGIN' onPress={()=>loginSubmitHandler()}/>
          
          
            <Text style={{textAlign:"center", marginVertical:"10px"}}>
              I don't have account 
              <TouchableOpacity onPress={()=>navigation.navigate('Registration')} style={{color:"blue"}}>
                <Text> sign up</Text>
              </TouchableOpacity>
            </Text>
      </FormBackground>
    </MainViewWrap>
  )
}

export default Login

const styles = StyleSheet.create({

})