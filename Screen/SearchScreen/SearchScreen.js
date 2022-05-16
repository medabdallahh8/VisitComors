import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>

        <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0.04)" />

        <Text> SearchScreen </Text>
      </View>
    );
  }
}

export default SearchScreen;
