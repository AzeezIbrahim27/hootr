import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  Feather,
} from '@expo/vector-icons';

export default function Header({ selected, onSelected }) {
  const [select, setSelect] = useState('home');
  const handleSelection = (value) => {
    setSelect(value);
    onSelected(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.header1,
            selected === select ? styles.selected : styles.header2,
          ]}
          onPress={() => handleSelection('home')}>
          <FontAwesome5 name="earlybirds" size={24} color="#A167C9" />
        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.header1,
            selected === select ? styles.selected : styles.header2,
          ]}
          onPress={() => handleSelection('home')}>
          <Image source={require('assets/hootrlogo.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={[
            styles.header1,
            selected === select ? styles.selected : styles.header2,
          ]}
          onPress={() => handleSelection('home')}>
          <FontAwesome5 name="egg" size={24} color="#DDDDDD" />
          <Feather name="feather" size={24} color="#DDDDDD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  header: {
    flex: 0.1,
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  header1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header2: {
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  selected: {
    color: '#654',
  },
});
