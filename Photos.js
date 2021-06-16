import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Fontisto, Feather, FontAwesome  } from '@expo/vector-icons';

export default function photos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <FontAwesome name="close" size={24} color="#C4C4C4" />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <Text style={styles.text}>Photos</Text>
          <View style={styles.photoContainer}>
          <View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View>
          <View style={styles.picture}>
           <AntDesign name="plus" size={24} color="white" />
          </View><View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View><View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View><View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View><View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View>
          <View style={styles.picture}>
           <AntDesign name="plus" size={24} color="white" />
          </View>
          <View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View>
          <View style={styles.picture}>
            <AntDesign name="plus" size={24} color="white" />
          </View>
          </View>
          <View style={styles.continuebutton}>
                    <TouchableOpacity style={styles.continuebutton}>
            <Text style={styles.continuetext}>CONTINUE</Text>
          </TouchableOpacity>
          </View>

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
    flex: 0.1,
    width: '80%',
    marginTop:10,
  },

  body: {
    flex: 0.90,
    width: '80%',
    marginTop: 25,
    marginBottom: 25,
  },
  bodyContainer: {
    flex: 0.10,
    width: '100%',
    marginTop:15,
    marginBottom:15,
    justifyContent:'center',
    alignItems: "center",
  },
  
  photoContainer: {
    flex:0.80,
    width:'100%',
    marginVertical: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    paddingVertical:1,
  },
  picture: {
    width:'30%',
    height: 150,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    marginTop:5,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    alignContent: "center",
    justifyContent: "center",
    fontSize: 25
  },
  continuebutton: {
    flex: 0.10,
    width:'70%',
    backgroundColor: '#6A0DAD',
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
