import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios" ;
import Weather from './Weather';


const API_KEY = "311e0062dd35665400bb6ccf3838e0c1";

export default class extends React.Component {
 state = {
  isLoading : true
 }

 getWeather = async(latitude, longitude) => {
    const { data : {
            main: {temp},
            weather
          }
        } = await axios.get(
     `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
     );
   
    this.setState({
      isLoading:false, 
      condition: weather[0].main,  //api에서 받아온 데이터가 array로 되어있어서
      temp
  
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : { latitude, longitude} } = await Location.getCurrentPositionAsync();
     // location.getCurrentPositionAsync에서 location 안에 coords 객체가 있는데
     // 그 객체 안에 있는 latutiude, longitude를 리네임하여 쓰는 것임.
     //이 데이터를 api에 보낸뒤 날씨를 받아올 것임.
      
      this.getWeather(latitude, longitude)
      
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }  
  componentDidMount(){
    this.getLocation();
  }

 render(){
   const { isLoading, temp, condition } = this.state;
   return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
 }
}

