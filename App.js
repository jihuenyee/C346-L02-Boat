import React from 'react';
import {Text, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Boat from './components/Boat.js';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'lightgray',
        padding: 10,
    },
});

const App = () => {
  return (
      <ScrollView style={styles.container}>
            <StatusBar hidden={true}/>
            <Text style={styles.header}>GetABoat - For Sale</Text>
            <Boat icon_name="sailboat" name="Sea Ray 500 Sundancer" desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." pic={require("./img/sea_ray.jpg")}/>
            <Boat icon_name="sailboat" name="Four Winns Horizon 180" desc="A sporty look and refined details truly set the Horizon 180 above all others." pic={require("./img/four_winns.jpg")}/>
            <Boat icon_name="sailboat" name="Flipper 640 ST" desc="A modern take on the classic, traditional hardtop and perfect for a family picnic." pic={require("./img/flipper.jpg")}/>
            <Boat icon_name="sailboat" name="Princess V48" desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." pic={require("./img/princess.jpg")}/>
            <Boat icon_name="sailboat" name="Bayliner 175 Bowrider" desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." pic={require("./img/bayliner.jpg")}/>
            <Boat icon_name="sailboat" name="Fairline Targa 47" desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." pic={require("./img/fairline.jpg")}/>
      </ScrollView>
  );
};

export default App;
