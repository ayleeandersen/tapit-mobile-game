/**
 * Buttons for starting the first and second levels as well as restarting the game.
 * Takes a prop for button text.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class StartButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={this.props.pressed}>
            <Text style={styles.text}>{this.props.buttonText}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#0085a1',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: '#F5FCFF',
    },
});
