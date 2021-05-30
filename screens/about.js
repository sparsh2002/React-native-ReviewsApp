import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
export default function About(){
    return (
        <View style={globalStyles.container}>
            <Text>This is a Simple Reviews App</Text>
            <Text>Developer: Sparsh Jhariya</Text>
            <Text>ECE IIIT Surat</Text>
        </View>
    )
}

