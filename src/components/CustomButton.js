import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../utils/Constants'

const CustomButton = (props) => {
  return (
    <View style={{width:props.width}}>
    <TouchableOpacity style={styles.style1} onPress={props.onPress}>
        <Text style={{ color: theme.white }}>{props.title}</Text>
    </TouchableOpacity>
</View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  style1: {
    justifyContent: 'center', backgroundColor: 'blue', alignItems: 'center',
    padding: 15, borderRadius: 5, marginTop: 16,
}
})