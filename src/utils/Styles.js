import { StyleSheet } from 'react-native'
import React from 'react'
import theme from '../utils/Constants'


const Styles = StyleSheet.create({
    viewstyle:{flex:1,backgroundColor:theme.white,padding:10},
    styles:{fontFamily:theme.BOLD,color:'#FFC20E',fontSize:30,padding:3},
    style1:{color:theme.black,fontSize:15,paddingLeft:10},
    view:{paddingTop:15,paddingRight:15},
    text:{ borderRadius: 10, borderWidth: 1, borderColor: 'gray', padding: 10, marginLeft: 10, marginTop: 10}
})
export default Styles