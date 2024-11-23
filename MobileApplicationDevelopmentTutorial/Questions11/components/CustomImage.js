import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const CustomImage = () => {
  return (
<View style={styles.container}>
    <Image
      source={require=('./assets/images/2477315.jpg')}
      style={styles.image}
    />
  </View>
);
}

export default CustomImage


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
    },
  });
  