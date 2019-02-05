/**
 * Tapit Game Main Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import StartButton from './src/StartButton';
import LevelOne from './src/LevelOne';
import LevelTwo from './src/LevelTwo';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isStarting: true,
      onLevelOne: false,
      intermediate: false,
      onLevelTwo: false,
      lostGame: false,
      wonGame: false
    }
  }

  render() {
    if (this.state.isStarting) {
      return this._renderStart();
    } else if (this.state.onLevelOne) {
      return this._renderLevelOne();
    } else if (this.state.intermediate) {
      return this._renderIntermediateScreen();
    } else if (this.state.onLevelTwo) {
      return this._renderLevelTwo();
    } else if (this.state.lostGame) {
      return this._renderLostGame();
    } else if (this.state.wonGame) {
      return this._renderWonGame();
    } else {
      return this._renderStart();
    }
  }

  _renderStart() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Tapit (Tah-Peet)!</Text>
        <StartButton 
          buttonText="Start Game" 
          pressed={() => this.setState({
              isStarting: false, 
              onLevelOne: true
            }
          )}/>
      </View>
    );
  }

  _renderLevelOne() {
    return (
      <View style={styles.container}>
        <LevelOne onFinish={(didWin) => this.finished(didWin)}></LevelOne>
      </View>
    );
  }

  _renderIntermediateScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.intermediate}>You Passed Level One!</Text>
        <StartButton
          buttonText="Start Level 2"
          pressed={() => this.setState({
            onLevelOne: false,
            intermediate: false,
            onLevelTwo: true,
          })}
        />
      </View>
    );
  }

  _renderLevelTwo() {
    return (
      <View style={styles.container}>
        <LevelTwo onFinish={(didWin) => this.finished(didWin)}></LevelTwo>
      </View>
    );
  }

  _renderLostGame() {
    return (
      <View style={styles.container}>
        <Text style={styles.lostGame}>You Lost!</Text>
        <StartButton
          buttonText="Play Again"
          pressed={() => this.setState({
            isStarting: false,
            onLevelOne: true,
            onLevelTwo: false,
            lostGame: false,
            wonGame: false
          })}
        />
      </View>
    );
  }

  _renderWonGame() {
    return (
      <View style={styles.container}>
        <Text style={styles.wonGame}>You Won!</Text>
        <StartButton
          buttonText="Play Again"
          pressed={() => this.setState({
            isStarting: false,
            onLevelOne: true,
            onLevelTwo: false,
            lostGame: false,
            wonGame: false
          })}
        />
      </View>
    );
  }

  finished(didWin) {
    if (didWin && this.state.onLevelOne) {
      this.setState({
        onLevelOne: false,
        intermediate: true,
        onLevelTwo: false,
        lostGame: false,
        wonGame: false
      });
    }
    else if (didWin && this.state.onLevelTwo) {
      this.setState({
        onLevelOne: false,
        intermediate: false,
        onLevelTwo: false,
        lostGame: false,
        wonGame: true
      });
    } else {
      this.setState({
        onLevelOne: false,
        intermediate: false,
        onLevelTwo: false,
        lostGame: true,
        wonGame: false
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    color: 'black'
  },
  lostGame: {
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    color: '#d67e73',
  },
  wonGame: {
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    color: 'black'
  },
  intermediate: {
    padding: 15,
    marginBottom: 20,
    fontSize: 20,
    color: 'black'
  }
});
