/**
 * 5x8 grid for game play.
 * Takes a prop telling it which level it is on.
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Grid extends Component {
    render() {
        let cells = [];
        let randomCell = Math.floor(Math.random() * (5*8));

        for (let i = 0; i < (5*8); i++) {
            cells.push(
                <TouchableOpacity 
                    key={i} 
                    activeOpacity={1} 
                    style={[
                        styles.tile, 
                        this.props.level === 1 ? {backgroundColor: 'white'} : {backgroundColor: this.randomColor()},
                        randomCell === i && {backgroundColor: 'gray'} 
                    ]}
                    onPress={() => this.props.pressed(randomCell === i ? true : false)}
                />
            ); 
        }

        return (
            <View style={styles.container}>
               {cells}
            </View>
        );
    }

    randomColor() {
        // Thank you stackoverflow: https://stackoverflow.com/questions/1484506/random-color-generator

        //TODO: once background color is changed to a hex color instead of gray, add a while loop to run until the hexColor is different than the good color. 
        let letters = "0123456789ABCDEF";
        let hexColor = 'gray';
        while (hexColor === 'gray') {
            hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += letters[Math.floor(Math.random() * 16)];
            }
        }

        return hexColor;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 10,
    },
    tile: {
        width: '20%',
        height: '12.5%',
        backgroundColor: 'purple',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
    },
});
