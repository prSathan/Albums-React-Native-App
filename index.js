// Import a Library to help create a Component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create a Component - an object that produces something that can be placed on the screen

const App = () => (
  <View>
    <Header headerText={'Album'} />
    <AlbumList />
  </View>
  );

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
