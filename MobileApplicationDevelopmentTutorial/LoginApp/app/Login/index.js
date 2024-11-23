import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import CustomView from '../../components/CustomView'
import { Link } from '@react-navigation/native'

import UserContext from '@/ContextAPI/UserContext'

const Login = ({navigation}) => {

  const [loginInformation, setLoginInformation] = useState({userName:'', password:''})

  const {userInformation={}} = useContext(UserContext)
  
  const inputHandler = (e, name) =>{
    const {value} = e.target
    const keyExist= loginInformation.hasOwnProperty(name)
    if(keyExist){
      let obj = {}
      obj[name] = value
      setLoginInformation({...loginInformation, ...obj})
    }
  }
  const handlerLogin = async () =>{
    try{
      if(loginInformation.password === userInformation.password && loginInformation.userName === userInformation.name){
        navigation.navigate('Home')
      }
      else{
        console.log(userInformation)
        console.log(loginInformation)
        console.log("Incorrect User Name or Password")
      }
    }catch(e){
      console.log(e)
    }
  }
  return (
    <CustomView>
      <Image source={require=('./assets/images/tree-without-leaves.png')} style={styles.image}/>
      <Text style={styles.topic}>MY LOGIN APP</Text>
      <InputField 
        placeholder={"User Name"}
        onChange={(e)=>inputHandler(e, "userName")}
        value={loginInformation.name}

      />
      <InputField 
        placeholder={"Password"}
        onChange={(e)=>inputHandler(e, 'password')}
        value={loginInformation.password}
        secureTextEntry={true}
      />
      <View style={{width:'100%'}}>
        <CustomButton title={"Login"} onPress={()=>handlerLogin()} />
      </View>
      <Text style={styles.forgetPassword}>
        Forget Password?
      </Text>
      <Text style={styles.signIn}>
        Don't have an account? <Link to={{ screen: 'Registration'}}>Sign In</Link>
      </Text>
    </CustomView>
  )
}

export default Login

const styles = StyleSheet.create({
    topic:{
        color:'white',
        textAlign:'center',
        fontSize:"25px",
    },
    forgetPassword:{
        alignSelf:'end',
        color:'white',
    },
    signIn:{
        textAlign:'center',
        color:'white',
    },
    image:{
        width:"300px",
        height:"300px"
    }
})
