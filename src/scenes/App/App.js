import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './App.styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.subtitle} >
          Welcome to
        </Text>
        <Text style={styles.title} >
          Universal
        </Text>
        <Text style={styles.subtitle} >
          React Native!
        </Text>
      </View>
    );
  }
}
