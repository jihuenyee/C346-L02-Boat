import React from 'react';
import { ScrollView } from 'react-native';
import Boat from './components/Boat.js';

const App = () => {
  return (
      <ScrollView>
            <StatusBar hidden={true}/>
            <Text>GetABoat - For Sale</Text>
            <Boat icon_name="boat" name="Sea Ray 500 Sundancer"
                  desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  pic={require("./img/sea_ray.jpg")}/>
            <Boat icon_name="boat" name="Four Winns Horizon 180"
                  desc="A sporty look and refined details truly set the Horizon 180 above all others."
                  pic={require("./img/four_winns.jpg")}/>
            <Boat icon_name="boat" name="Flipper 640 ST"
                  desc="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  pic={require("./img/flipper.jpg")}/>
            <Boat icon_name="boat" name="Princess V48"
                  desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  pic={require("./img/princess.jpg")}/>
            <Boat icon_name="boat" name="Bayliner 175 Bowrider"
                  desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  pic={require("./img/bayliner.jpg")}/>
            <Boat icon_name="boat" name="Fairline Targa 47"
                  desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  pic={require("./img/fairline.jpg")}/>
      </ScrollView>
  );
};

export default App;
