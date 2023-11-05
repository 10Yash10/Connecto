import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/MainScreen/HomeScreen/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import { SafeAreaView, View } from "react-native";
import Colors from "./constants/Colors";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle:{backgroundColor:"#333333"},
            title: "Connecto",
            headerStyle: {
              backgroundColor: Colors.light.tint,
            },
            headerTintColor: Colors.light.background,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View>
                <View
                  style={{
                    borderWidth:1.5,
                    borderColor:Colors.light.background,
                    marginBottom:5,
                    elevation:10,
                    backgroundColor: "black",
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                ></View>
              </View>
            ),
          }}
        >
          <Tab.Screen
            name="Camera"
            component={HomeScreen}
            options={{
              tabBarShowLabel:false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="camera"
                    size={24}
                    color={tabInfo.focused ? Colors.light.tint : Colors.light.background}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={HomeScreen}
            options={{
              tabBarShowLabel:false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="search"
                    size={24}
                    color={tabInfo.focused ? Colors.light.tint : Colors.light.background}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Chats"
            component={HomeScreen}
            options={{
              tabBarShowLabel:false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="chatbox-ellipses"
                    size={24}
                    color={tabInfo.focused ? Colors.light.tint : Colors.light.background}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Request"
            component={SettingsScreen}
            options={{
              tabBarShowLabel:false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Entypo
                    name="circle-with-plus"
                    size={24}
                    color={tabInfo.focused ? Colors.light.tint : Colors.light.background}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarShowLabel:false,
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="settings"
                    size={24}
                    color={tabInfo.focused ? Colors.light.tint : Colors.light.background}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
