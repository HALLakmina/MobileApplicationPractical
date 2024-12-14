import { Pressable, StyleSheet, Text, TextInputBase, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MainViewWrap from '../../components/MainViewWrap'
import { Button, FlatList, Modal, TextInput, TouchableOpacity } from 'react-native-web'
import Profile from '../../components/Profile'
import HeadingText from '../../components/HeadingText'
import RootContext from '../../ContextAPI/DataHandlerContext'
import { getUserById } from '../../APIS/userAPIS'
import { createNote } from '../../APIS/notesAPIS'

const Home = () => {

  const {userId} = useContext(RootContext)
  const noteProperty={title:"", note:""}

  const [notes, setNotes] = useState(noteProperty)
  const [notesList, setNotesList] = useState([])
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState({})

  useEffect(()=>{
    getUserByDetails()
  },[])
  useEffect(()=>{
    setNotesList(user?.notesList)
  },[user])

  useEffect(()=>{
    createNote(notesList, userId)
  },[notesList])
  const getUserByDetails = async ()=>{
    const respond =  await getUserById(userId)
    setUser(respond)
  }

  const noteReset=()=>{
    setNotes(noteProperty)
  }
  const notesInputHandler = (e, name)=>{
    const {value} = e.target
    const keyIsExist = noteProperty.hasOwnProperty(name)
    if(keyIsExist){
      let obj={}
      obj[name] = value
      setNotes({...notes, ...obj})
    } 
  }
  const notesSubmitHandler = ()=>{
    if(notes.note.length>0 ||  notes.title.length>0){
      setNotesList([...notesList, notes])
      noteReset()
    }
  }
  return (
    <MainViewWrap>
      <HeadingText>{`Hi ${"Lahiru"} Welcome Back`}</HeadingText>
        <View style={styles.buttonBox}>
          <View style={{width:"150px",margin:"5px"}}>
            <Button title="Profile" onPress={() => setVisible(true)} />
          </View>
          <View style={{width:"150px",margin:"5px"}}>
            <Button title='LOGOUT' color={"red"} onPress={() =>navigation.navigate('/')}/>
          </View>
        </View>
        <Profile visible={visible} hiding={setVisible} data={user}/>

        <View>
          <TextInput 
            placeholder="Title" 
            style={styles.textTitleBox} 
            onChange={(e) => notesInputHandler(e, "title")}
            value={notes.title}
          />
          <TextInput 
            multiline 
            rows={5} 
            placeholder="Type your note" 
            style={styles.textBox} 
            onChange={(e) => notesInputHandler(e, "note")}
            value={notes.note}
          />
          <View style={{width:"150px",marginTop:"5px", alignSelf:"center"}}>
            <Button title='Add +' onPress={(e) => notesSubmitHandler()}/>
          </View>
        </View>
        <View>
        <Text style={{fontSize:"18px", fontWeight:"bold",}}>Notes</Text>
        <FlatList
          data={notesList}
          key={(item) => item.id}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.noteBox} key={item.id}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteDescription}>{item.note}</Text>
            </View>
          )}
        />
        </View>
    </MainViewWrap>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 buttonBox:{
  display:"flex",
  flexDirection:"column",
  alignItems:"flex-end",
  padding:"10px"
 },
  textTitleBox:{
    borderLeftWidth:"1px",
    borderRightWidth:"1px",
    borderTopWidth:"1px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    padding:"10px",
    outlineStyle:"none",
  },
  textBox:{
    borderLeftWidth:"1px",
    borderRightWidth:"1px",
    borderBottomWidth:"1px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    outlineStyle:"none",
    padding:"10px",
  },
  noteBox:{
    display:"flex",
    flexDecoration:"column",
    alignItems:"flex-start",
    backgroundColor:"lightgray",
    padding: "10px",
    borderRadius: "10px",
    margin:"5px"
  },
  noteTitle:{
    fontSize:"16px",
    fontWeight:"bold"
  },
  noteDescription:{
    paddingLeft:"10px",
  }
})