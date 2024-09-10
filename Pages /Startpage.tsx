import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import start_img from './assets/start_img.png'

export default function startpage() {
  return (
    <SafeAreaView style ={styles.safeArea}>
    <View style ={styles.container}>
      <Text style ={styles.headingText}>Let's get started !</Text>
      <Image source={start_img}  style ={styles.start_img}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#FFF9C4',
    },
    safeArea :{
        flex:1 ,
    },
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        alignContent:'center',
        justifyContent:'center',
        paddingTop :55,
        paddingLeft:65
    },
    start_img:{
        height: 200,
        width:100,
    }

})