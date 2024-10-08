import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from './src/utils/Constants'
import Styles from './src/utils/Styles'
import Screen1 from './src/Screens/Describe'
import Screen2 from './src/Screens/Home'
const App = () => {
  return (
  //  <Screen1/>
  <Screen2/>
  )
}

export default App

const styles = StyleSheet.create({
  style:{fontFamily:theme.BOLD,color:theme.black}
})