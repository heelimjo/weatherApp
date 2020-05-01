import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#eeaeca", "#94bbe9"],
         title: "Haze",
        subtitle: "Hello"
    },

    Thunderstorm : {
        iconName: "weather-lightning-rainy",
        gradient: ["#110559", "#a0c3ff"],
        title: "Lightning",
        subtitle: "stay home"
    },
    
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#1c6cf2", "#ffffff"],
        title: "Rainy day",
        subtitle: "Don't forget your umbrella"
    },
    
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#110559", "#065ced"],
        title: "Pouring as hell",
        subtitle: "Go out if you like wet shoes"
    }, 
    
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#a2eafc", "#bac7c4"],
        title: "Snowy",
        subtitle: "I like snow"
    }, 

    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#c7bac2", "#e3a2fc"],
        title: "Hail",
        subtitle: "Put on your hat"

    }, 
    
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fd7c2d", "#bac322"],
        title: "Sunny",
        subtitle: "Let's go out"

    }, 
    
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#b1a2fc", "#c7bac2"],
        title: "Cloudy",
        subtitle: "Let's have some coffee"
    }, 
    
    Mist: {
        iconName: "weather-hail",
        gradient: ["#14c17c", "#f6f6f6"],
        title: "Mist",
        subtitle: "Wowww"
    },
    
    Dust: {
        iconName: "weather-hail",
        gradient: ["#d5d5d5", "#636363"],
        title: "Dust",
        subtitle: "wear your mask"
    }

};

export default function Weather({temp, condition}){
    return (
            <LinearGradient
               colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" /> 
                <View style={styles.halfContainer}>
                 <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                 <Text style={styles.temp}>{temp}</Text>
                 </View>
                 <View style={{...styles.halfContainer, ...styles.textContainer}}>
                     <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                     <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                 </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", 
        "Atmosphere", "Clear", "Clouds", "Haze", "Mist","Dust" ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"

    },

    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },

    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    }
});