/**
 * Code for the second level of tapit
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Grid from './Grid';

export default class LevelTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        // TODO: change to 20
        if (this.state.counter === 5) {
            this.endLevel(true);
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.level}>Tapit - Level Two</Text>
                    <Text style={styles.counter}>{this.state.counter}</Text>
                </View>
                <Grid level={2} pressed={(isGoodCell) => this.updateCounter(isGoodCell)}></Grid>
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
        } else {
            this.endLevel(false);
        }
    }

    endLevel(didWin) {
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
        backgroundColor: 'gray',
        padding: 15,
    },
    level: {
        flexGrow: 1,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
        color: 'blue'
    },
    counter: {
        padding: 15,
        fontSize: 20,
        color: 'green'
    }
});
