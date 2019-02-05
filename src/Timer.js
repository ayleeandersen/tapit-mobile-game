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

        this.timer;
        this.startTimer();
    }

    render() {
        return (
            <Text style={styles.timer}>{this.state.time}</Text>
        );
    }

    startTimer() {
        // updates time every second
         this.timer = setInterval(() => {
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1
                }
            });
            if (this.state.time === 0) {
                clearInterval(this.timer);
                this.props.onFinish();
            }
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props && nextState === this.state) {
            return false;
        } else {
            return true;
        }
    }

    componentWillUnmount() {
        // Clear timer in case application gets closed during game play
        clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    timer: {
        padding: 10,
        fontSize: 25,
        color: '#d67e73',
        textAlign: 'center'
    },
});
