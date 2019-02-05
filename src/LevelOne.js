/**
 * Code for the first level of tapit
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Grid from './Grid';
import Timer from './Timer';

export default class LevelOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.conter}>
                        <Text style={styles.headerText}>Time:</Text>
                        <Timer onFinish={() => this.endLevel()}/>
                    </View>
                    <Text style={styles.level}>Tapit - Level One</Text>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Score:</Text>
                        <Text style={styles.counter}>{this.state.counter}</Text>
                    </View>
                </View>
                <Grid level={1} pressed={(isGoodCell) => this.updateCounter(isGoodCell)}></Grid>
            </View>
        );
    }

    updateCounter(isGoodCell) {
        if (isGoodCell) {
            this.setState((prevState) => { 
                return {
                    counter: prevState.counter + 1
                }
            });
        }
    }

    endLevel() {
        let didWin = this.state.counter >= 15 ? true : false;
        this.props.onFinish(didWin);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#cce6ec',
        padding: 15,
    },
    headerText: {
        fontSize: 15,
        color: '#d67e73',
        padding: 5,
        textAlign: 'center'
    },
    level: {
        flexGrow: 1,
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
        color: '#d67e73'
    },
    counter: {
        padding: 10,
        fontSize: 25,
        color: '#d67e73',
        textAlign: 'center',
    }
});
