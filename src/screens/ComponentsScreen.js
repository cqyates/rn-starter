import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Corey"
    return (
    <View>
        <Text style={styles.headerStyle}> Getting Started with React Native </Text>
        <Text style={styles.textStyle}>My Name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    headerStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;