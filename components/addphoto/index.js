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
      <View style={styles.picture}>
        <TouchableOpacity
          style={[
            styles.picture,
            selected === select ? styles.selected : styles.picture,
          ]}
          onPress={() => handleSelection('home')}>
          <MaterialIcons name="photo-camera" size={24} color="black" />
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
  picture: {
    width:'30%',
    height: 150,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    marginTop:5,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    color: '#654',
  },


});
