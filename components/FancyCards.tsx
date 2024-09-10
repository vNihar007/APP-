import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places </Text>
      <View style = {[styles.card,styles.elvatedCard]}>
        <Image 
            source = {{
                uri: 'https://lh4.googleusercontent.com/oX0ZPLzWbQj84twNVWUfoNprCT7XlPqBLPcJM-R0Vq_V-iazcTf-Fmzwp2NY2XJAgy3q0A-pj0Ajqx9ajN-8b0pPF4tZ2t_XdNKIc12sWz87lnsYpMer0sztz_LnLML9hMBtcpVRqNE9qUYNGcM-q-8L1RyAhapV23nZnjhW0mOHb-KOJLu-2YcIsd3w3FNzd32Gbw=w400-h300'
            }}
            style = {styles.Image}
        />
        <View style = {styles.cardbody}> 
            <Text style = {styles.cardTitle}>CHARMINAR</Text>
            <Text style = {styles.cardlabel}>.Historic Monument</Text>
            <Text style = {styles.cardDescription}>.Charminar is a historic monument and mosque in Hyderabad, India, known for its stunning architecture and iconic four minarets.</Text>
            <Text style = {styles.cardFooter}>.1 hr 43 min</Text>
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
    card:{
        height: 350,
        width : 360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
        
      },
    elvatedCard:{
        backgroundColor : 'grey',
        elevation : 3 ,
        shadowOffset:{
            width :1 ,
            height :1,
        }

    },
    Image:{
        height :200,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardbody:{
        flex : 1 ,
        flexGrow : 1,
        paddingHorizontal: 12,

    },
    cardTitle:{
        color:'white',
        fontWeight : 'bold',
        fontSize:24,
        marginBottom : 6,
        padding: 2,
        
    },
    cardlabel:{
        color:'white',
        padding: 2,
    },
    cardDescription:{
        color:'white',
        padding: 2,
    },
    cardFooter:{
        color:'white',
        padding: 2,
    }
}) 