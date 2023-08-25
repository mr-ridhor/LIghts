// src/navigation/MainNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }} // Hide header for the BottomTabNavigator screens
    />
    <Stack.Screen
      name="Category"
      component={CategoriesScreen}
      // options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
