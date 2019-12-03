import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" source={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Beach" source={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" source={require('../../assets/mountain.jpg')}/>
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

export default ImageScreen;