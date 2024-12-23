import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './home'
import CalenderScreen from './calendar'
import SettingScreen from './setting'
import MainContext from '../ContextAPI/AppMainContext'
import { getDayPlans } from '../APIs/DayPlans'
import { getCategory } from '../APIs/Category'

const Tab = createBottomTabNavigator();
const Index = () => {
  const [dayPlans, setDayPlans] = useState([])
  const [category, setCategory] = useState([])

  useEffect(()=>{
    eventHandler("GET_ALL_DAY_PLANS")
    eventHandler("GET_ALL_CATEGORY")
  },[])

  const getAllDaysPlan = async() =>{
    try{
      const response = await getDayPlans()
      setDayPlans(response)
    }catch(e){

    }
  }

  const getAllCategory = async() =>{
    try{
      const response = await getCategory()
      setCategory(response)
    }catch(e){

    }
  }

  const eventHandler =(action, payload)=>{
    switch (action){
      case 'GET_ALL_DAY_PLANS':
        getAllDaysPlan()
        break;
      case 'GET_ALL_CATEGORY':
        getAllCategory()
        break;
    }
  }
  return (
    <MainContext.Provider value={{dayPlans, category, eventHandler}}>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calender" component={CalenderScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </MainContext.Provider>
  )
}

export default Index
