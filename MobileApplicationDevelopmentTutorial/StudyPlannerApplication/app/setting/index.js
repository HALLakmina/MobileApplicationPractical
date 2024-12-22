import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-web'
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

const SettingScreen = () => {
    const onSelectColor = ({ hex }) => {
        // do something with the selected color.
        console.log(hex);
      };
  return (
    <View style={styles.settingScreen}>
      <Text>Create Category</Text>
      <TextInput placeholder='Category Name'/>

      <Text>Pick Color For Category</Text>
        <ColorPicker style={{ width: '100%',marginVertical:"20px" }} value='red' onComplete={onSelectColor}>
            <Preview />
            <Panel1 />
            <HueSlider />
        </ColorPicker>
      <Button title='Add +'/>
      <View>
        <FileList/>
        <View>
            <Title>Category Name</Title>
        </View>
      </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    settingScreen:{
        padding:"10px"
    }
})