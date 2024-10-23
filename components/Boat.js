import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// Boat Component
const Boat = ({ icon_name, name, desc, pic }) => {
    return (
        <View>
            <Icon name={icon_name} size={15}>
                <Text>{name}</Text>
            </Icon>
            <Text>{desc}</Text>
            <Image source={pic} style={{width:400, height:500}}/>
        </View>
    );
};

export default Boat;
