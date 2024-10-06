import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native'
import React from 'react'

export default function Startpage() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style ={styles.container}>
        <Text style = {styles.headingText}>Lets get started! </Text>
        <View style={styles.image}>
        <Image source={{uri:'file:///Users/Temporary/Downloads/start_img.png'}}
                style ={styles.startimg}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1
  },
  container:{
    flex:1,
    backgroundColor:'#FFF9C4',
    
  },
  headingText:{
    fontWeight:'bold',
    fontSize:30,
    paddingTop :55,
    paddingLeft:66,
  },
  startimg:{
    width: '40%',
    height:'60%',
    
  },
  image:{
    justifyContent:'center',
    alignItems:'center'
  }
})




