import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Homestyles } from './styles/HomeScreen'

export default function App() {
  return (
    <ImageBackground source={require('./image/Background.jpg')} style={Homestyles.image}>
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

