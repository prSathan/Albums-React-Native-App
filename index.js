// Import a Library to help create a Component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component - an object that produces something that can be placed on the screen

const App = () => (
    <Header headerText={'Album'}/>
  );

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
