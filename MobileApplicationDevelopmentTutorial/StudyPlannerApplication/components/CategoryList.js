import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CategoryContainer from './CategoryContainer'
import MainContext from '../ContextAPI/AppMainContext'
import { FlatList } from 'react-native-web'

const CategoryList = () => {
    const {category=[]} = useContext(MainContext)
    return (
        <View style={styles.categoryList}>
            <Text style={styles.topic}>Modified Category</Text>
            <View style={styles.categoryListContainer}>
                {category.map((data, index)=>(
                    <CategoryContainer details={data} key={index}/>
                ))}
            </View>
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    
    categoryListContainer:{
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:"5px",
    },
    categoryList:{
        marginVertical:"10px",
        width:"100%",
    },
    topic:{
        fontSize:"18px",
        fontWeight:"bold",
    }
})