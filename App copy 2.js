import React, { Component } from 'react';
import { Platform, Stylesheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-natigation';
//import { NavigationContainer } from '@react-navigation/stack';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>m
                <Text>H Screen </Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);