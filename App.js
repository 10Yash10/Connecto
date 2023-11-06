import React from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { MainTabNavigator } from "./navigation/MainTabNavigator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
