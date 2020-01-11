/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Barang from './Component/Barang';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="grey" />
        <Text>Tugas 2 React Native</Text>
        <Barang namaBelanja="================ Total Belanja ================" />
      </View>
    );
  }
}
