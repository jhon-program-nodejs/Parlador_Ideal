import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native'
import splash from '../assets/splash.json'
// create a component

const size = Dimensions.get('window').whidth * 0.5

const splashScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.dispatch(CommonActions.reset({
                index:0,
                routes:[{name:'UserLogin'}]
            }))
        },5000)
    },[])
    return (
        <View style={styles.container}>
            
            <LottieView 
            source={splash}
            autoPlay 
            loop 
            resizeMode='contain' 
            speed={3}
            style={{
                width:'70%',
                height:'60%',
                backgroundColor:'#7c8692',
                justifyContent:'center',
                alignItems:'center'
            }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#7c8692',
    },
});

//make this component available to the app
export default splashScreen;
