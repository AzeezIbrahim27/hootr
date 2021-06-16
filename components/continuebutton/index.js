import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MaterialIcons,
  FontAwesome,
  Feather,
} from '@expo/vector-icons';

export default function Footer({ selected, onSelected }) {
  const [select, setSelect] = useState('home');
  const handleSelection = (value) => {
    setSelect(value);
    onSelected(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === select ? styles.selected : styles.button,
          ]}
          onPress={() => handleSelection('home')}>
          <Text>CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button1}>
        <TouchableOpacity
          style={[
            styles.button1,
            selected === select ? styles.selected : styles.button1,
          ]}
          onPress={() => handleSelection('home')}>
          <Text>CONTINUE</Text>
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
  button: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#D2B2E5',
    width: '70%',
    alignItems: 'center',
    fontColor: 'white',
    marginVertical: 20
  },
  button1: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#A167C9',
    width: '70%',
    alignItems: 'center',
    fontColor: 'white'
  },
  selected: {
    color: '#654',
  },


});
