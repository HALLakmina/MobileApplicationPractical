import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal } from 'react-native-web'

const Profile = ({visible, hiding, data}) => {
    const close = () => {
        hiding(false)
    }
  return (
    <Modal visible={visible} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.detailsBox}>
              <Text style={styles.detailsTitle}>Name</Text>
              <Text style={styles.detailsDescription}>{data?.name}</Text>
            </View>
            <View style={styles.detailsBox}>
              <Text style={styles.detailsTitle}>Registration no</Text>
              <Text style={styles.detailsDescription}>{data?.registration_no}</Text>
            </View>
            <View style={styles.detailsBox}>
              <Text style={styles.detailsTitle}>Index no</Text>
              <Text style={styles.detailsDescription}>{data?.index_no}</Text>
            </View>
            <View style={styles.detailsBox}>
              <Text style={styles.detailsTitle}>E-Mail</Text>
              <Text style={styles.detailsDescription}>{data?.e_mail}</Text>
            </View>
            <View style={{paddingTop:"20px"}}>
              <Button title="Close" onPress={() => close(false)}/>
            </View>
          </View>
        </Modal>
  )
}

export default Profile

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      detailsBox: {
        display: 'flex',
        flexDirection:"column",
        alignItems:'flex-start',
        marginHorizontal:"10px",
        maxWidth:"480px",
        width:"100%",
        padding:"10px"
      },
      detailsTitle: {
        fontSize:"20px",
        fontWeight:"bold",
        color:"white"
      },
      detailsDescription: {
        paddingLeft:"15px",
        color:"white",
      }
})