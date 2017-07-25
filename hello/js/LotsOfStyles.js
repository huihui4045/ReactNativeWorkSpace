/**
 * Created by gavin on 2017/4/11.
 */


import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={{ width:50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{ width:50,height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{ width:50,height: 50, backgroundColor: 'steelblue'}}/>
                <View style={{flex:1 ,backgroundColor:'skyblue'}}><Text>111111</Text></View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    root: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:'red'

    },

    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',

    },
});