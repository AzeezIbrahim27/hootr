import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather, FontAwesome  } from '@expo/vector-icons';

export default function AccountVerification() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <FontAwesome name="close" size={24} color="#C4C4C4" />
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>What's your email?</Text>
        <Text>Don't lose your account, attach your email and verify your email address</Text>
        <View style={styles.form}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.continuebutton}>
          <TouchableOpacity style={styles.continuebutton}>
            <Text style={styles.continuetext}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continuebutton2}>
          <TouchableOpacity style={styles.continuebutton2}>
            <Text style={styles.continuetext}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        
      </View> 
      
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    flex: 0.10,
    width: '80%',
    marginTop:10,
  },

  body: {
    flex: 0.90,
    width: '80%',
    marginTop: 25,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems:'center'
  },
  bodyText:{
    fontSize: 25
  },
    form: {
    width:'85%',
    paddingVertical:10,
    marginVertical:2
  },
    textInput:{
    width:'100%',
    height: 50,
    backgroundColor: '#A167C9',
    borderRadius:10,
    marginVertical:15,
    padding:5
  },
  continuebutton: {
    flex: 0.05,
    width:'80%',
    backgroundColor: '#6A0DAD',
    justifyContent: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
    continuebutton2: {
    flex: 0.05,
    width:'80%',
    backgroundColor: '#D2B2E5',
    justifyContent: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
   continuetext:{
    fontSize:15,
    alignSelf:'center',
    color: 'white'
  },
})
