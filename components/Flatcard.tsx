import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
      <Text style = {styles.headingText}>Flatcard</Text>
      <View style = {styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View> 
        <View style = {[styles.card,styles.cardTwo]}>
          <Text>Green</Text>
        </View> 
        <View style = {[styles.card,styles.cardThree]}>
          <Text>Blue</Text>
        </View> 
        <View style = {[styles.card,styles.cardThree]}>
          <Text>Bluee</Text>
        </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal :8 ,
  },
  container:{
    flex : 1 ,
    flexDirection : 'row',
    padding : 8 

  },
  card:{
    flex :1 , 
    width :100,
    height :100,
    borderRadius :4 ,
    margin : 8,
    justifyContent : 'center',
    alignItems :'center',
  },
  cardOne:{
     backgroundColor : '#FF0000'
  },
  cardTwo :{
    backgroundColor : '#008000'
  },
  cardThree:{
    backgroundColor :'#0000FF'
  }
})