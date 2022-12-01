import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
const NewTweetButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewTweetButton;
