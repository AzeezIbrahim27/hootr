import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons, FontAwesome, MaterialCommunityIcons, Fontisto, Feather  } from '@expo/vector-icons';

export default function footermenu() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.footer1}>
          <FontAwesome name="location-arrow" size={24} color="#DDDDDD" />
        </View>
        <View style={styles.footer1}>
          <Feather name="chevron-up" size={24} color="#DDDDDD" />
        </View>
        <View style={styles.footer1}>
          <MaterialIcons name="grass" size={24} color="#DDDDDD" />
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
  footer: {
    flex: 0.10,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    width: '100%',
  },
  footer1: {
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },
})
