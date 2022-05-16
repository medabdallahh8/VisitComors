import React from "react";
import { View, StatusBar } from "react-native";
import TabNavigator from './Navigation/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import colors from "./Constant/Colors";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import CommentScreen from "./Screen/CommentScreen/CommentScreen";
import SearchScreen from "./Screen/SearchScreen/SearchScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white
  }
}

const Stack = createNativeStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }
  }

  loadFonts = async () => {
    await Font.loadAsync({
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Nunito-ExtraBold': {
        uri: require('./assets/fonts/Nunito-ExtraBold.ttf'),
        //display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-Regular': {
        uri: require('./assets/fonts/Nunito-Regular.ttf'),
        //display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-Medium': {
        uri: require('./assets/fonts/Nunito-Medium.ttf'),
        //display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-Bold': {
        uri: require('./assets/fonts/Nunito-Bold.ttf'),
        //display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-SemiBold': {
        uri: require('./assets/fonts/Nunito-SemiBold.ttf'),
        //display: Font.FontDisplay.FALLBACK,
      },
    });
  }

  render() {

    if (!this.state.fontsLoaded) {
      return (
        <View>

          <StatusBar barStyle="dark-content" />

          <AppLoading
            startAsync={this.loadFonts}
            onError={console.warn}
            onFinish={() => this.setState({ fontsLoaded: true })}
          />

        </View>
      );
    }

    return (
      <NavigationContainer theme={theme} >
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen name="TabScreen" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Comment" component={CommentScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App