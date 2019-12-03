import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: "Jan", age: 20 },
        { name: "April", age: 25 },
        { name: "June", age: 27 },
        { name: "May", age: 30 },
    ];
    return  (
        <FlatList 
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>;
        }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 15
    }
});

export default ListScreen;