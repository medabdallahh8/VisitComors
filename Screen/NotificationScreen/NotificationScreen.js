import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>

        <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0.04)" />

        <Text> NotificationScreen </Text>
      </View>
    );
  }
}

export default NotificationScreen;
