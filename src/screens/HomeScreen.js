import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  return <View>
    <Button 
      onPress={() => props.navigation.navigate('Components')}
      title="Components Demo"
    />
    <Button 
      onPress={() => props.navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button 
      onPress={() => props.navigation.navigate('Image')}
      title="Go to Image Screen"
    />
    <Button
      onPress={() => props.navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button
      onPress={() => props.navigation.navigate('Color')}
      title="Go to Color Picker Demo"
    />
    <Button
      onPress={() => props.navigation.navigate('ColorAdjuster')}
      title="Go to Color Adjuster Demo"
    />
    <Button
      onPress={() => props.navigation.navigate('Text')}
      title="Go to Text Screen Demo"
    />
    <Button
      onPress={() => props.navigation.navigate('Box')}
      title="Go to Box Screen Demo"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
