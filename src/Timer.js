/**
 * Timer for the level one header
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state ={
            time: 10,
        }

        this.startTimer();
    }

    render() {
        return (
            <Text style={styles.timer}>{this.state.time}</Text>
        );
    }

    startTimer() {
        // updates time every second
        let timer = setInterval(() => {
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1
                }
            });
            if (this.state.time === 0) {
                clearInterval(timer);
                this.props.onFinish();
            }
        }, 1000);
    }
}

const styles = StyleSheet.create({
    timer: {
        padding: 15,
        fontSize: 25,
        color: '#d67e73',
    },
});
