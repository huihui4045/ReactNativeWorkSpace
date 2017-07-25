/**
 * Created by gavin on 2017/4/11.
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export  default class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {

                return {showText: !previousState.showText};
            });
        }, 1000);
    }


    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}



