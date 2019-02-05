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

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isStarting: true,
      onLevelOne: false,
      onLevelTwo: false,
      lostGame: false,
      wonGame: false
    }
  }

  render() {
    if (this.state.isStarting) {
      return this._renderStart();
    }
    else if (this.state.onLevelOne) {
      return this._renderLevelOne();
    }

    
    else if (this.state.lostGame) {
      return this._renderLostGame();
    } 
    else if (this.state.wonGame) {
      return this._renderWonGame();
    }
    else {
      return this._renderStart();
    }
  }

  _renderStart() {
    return (
      <View style={styles.container}>
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

  _renderLostGame() {
    return (
      <View style={styles.container}>
        <Text style={styles.lostGame}>YOU LOST</Text>
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
        <Text style={styles.wonGame}>YOU WON</Text>
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
    if (didWin) {
      this.setState({
        onLevelOne: false,
        onLevelTwo: false,
        lostGame: false,
        wonGame: true
      });
    } else {
      this.setState({
        onLevelOne: false,
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
  lostGame: {
    padding: 15,
    fontSize: 20,
    color: 'red',
  },
  wonGame: {
    padding: 15,
    fontSize: 20,
    color: 'green'
  }
});
