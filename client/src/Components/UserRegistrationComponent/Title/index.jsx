import React from 'react'
import {View, Text, LogBox} from 'react-native'
import styles from './style'

export default function Title(){

    LogBox.ignoreLogs(['Remote debugger']);

    return (
        <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>PARLADOR IDEAL!</Text>
        </View>
    )
}