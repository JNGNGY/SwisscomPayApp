import React from 'react'
import { Text, View } from 'react-native'
import  { Homestyles } from '../styles/HomeScreen'
import Start from '../components/Start'



const HomeScreen = () => {
    return (
         <View style={Homestyles.container}> 
             <View style={Homestyles.wrapper}>
                <Text style={Homestyles.titleText}>Welcome Back</Text>
                <Text style={Homestyles.NameText}>Jazz Kang</Text>
                <Start /> 
             </View>
        </View>
        
    )
}

export default HomeScreen
