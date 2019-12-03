import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageScreen = props => {
    return (
        <View>
            <Image source={props.source} />
            <Text>{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default ImageScreen;