import React from 'react';
import {View, Text, StatusBar, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    boatContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#333',
        borderWidth: 2,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 10,
        borderWidth: 2,
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lightgrey',
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 2
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 5,
    },
});

// Boat Component
const Boat = ({ icon_name, name, desc, pic }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.titleContainer}>
            <Icon name={icon_name} size={15} color={"white"}>
                <Text color={"white"}>{name}</Text>
            </Icon>
            </View>
            <Text style={styles.description}>{desc}</Text>
            <Image source={pic} style={styles.image} />
        </View>
    );
};

export default Boat;
