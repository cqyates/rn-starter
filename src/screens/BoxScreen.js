import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child One</Text>
    <Text style={styles.textTwoStyle}>Child Two</Text>
    <Text style={styles.textThreeStyle}>Child Three</Text>
  </View>
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200, 
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1
  }
});

export default BoxScreen;
