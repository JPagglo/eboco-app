import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';





export default function HomeScree() {
  return (
    <NavigationContainer style ={style.container}>
      <Text>HomeScreen</Text>
      <View>
        <Text>Quadro 1</Text>
        <Text>Quadro 2</Text>
        <Text>Quadro 3</Text>
        <Text>Quadro 4</Text>
      </View>
  
    </NavigationContainer>
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