// Import Libraries for making a Component

import React from 'react';
import { Text, View } from 'react-native';

// Make a Component

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ef56b9'
  },
  textStyle: {
    fontSize: 50
  }
};

// Make the Component available to other parts of the app

export default Header;
