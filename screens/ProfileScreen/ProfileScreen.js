import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style ={style.container}>
      <Text>ProfileScreen</Text>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    },

});