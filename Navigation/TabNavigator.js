import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';

import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import DiscoverScreen from '../Screen/DiscoverScreen/DiscoverScreen';
import FavoritesScreen from '../Screen/FavoritesScreen/FavoritesScreen';
import NotificationScreen from '../Screen/NotificationScreen/NotificationScreen'
import colors from "../Constant/Colors"

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = 'ios-home';
              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === 'Favoris') {
              iconName = 'star';
              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === "Découvrir") {
              iconName = 'compass';
              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === "Notification") {
              iconName = 'notifications';
              return <Ionicons name={iconName} size={25} color={color} />;
            }
          },
          "headerShown": false,
          "tabBarActiveTintColor": colors.bleupluclaire,
          "tabBarInactiveTintColor": colors.grisFonce,
          "tabBarHideOnKeyboard": true,
          "tabBarStyle": [
            {
              "height": 70,
              "position": "absolute",
              "bottom": 10,
              "elevation": 4,
              "marginHorizontal": 15,
              "borderRadius": 12
            }
          ],
          "tabBarItemStyle": [
            {
              "paddingVertical": 8,
            }
          ],
          "tabBarLabelStyle": [
            {
              "fontSize": 13,
              "fontFamily": "Nunito-SemiBold",
              "letterSpacing": 0.4
            }
          ]
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={HomeScreen}
          options={{
            unmountOnBlur: true,
            title: "Acceuil"
          }}
        />
        <Tab.Screen
          name="Découvrir"
          component={DiscoverScreen}
          options={{
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Favoris"
          component={FavoritesScreen}
          options={{
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            unmountOnBlur: true,
          }}
        />

      </Tab.Navigator>
    )
  }
}

export default TabNavigator