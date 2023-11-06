import { View, Image} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CameraScreen from "../screens/MainScreen/CameraScreen/CameraScreen";
import SearchScreen from "../screens/MainScreen/SearchScreen/SearchScreen";
import HomeScreen from "../screens/MainScreen/HomeScreen/HomeScreen";
import RequestsScreen from "../screens/MainScreen/RequestsScreen/RequestsScreen";
import SettingsScreen from "../screens/MainScreen/SettingsScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
    return (
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
                    borderColor:Colors.light.tabIconDefault,
                    marginBottom:5,
                    elevation:10,
                    backgroundColor: Colors.dark.background,
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                ><Image source={{uri: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png'}} style={{height:'100%',width:'100%',borderRadius:50}} /></View>
              </View>
            ),
          }}
        >
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
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
            component={SearchScreen}
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
            component={RequestsScreen}
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
    )
}

// export default MainTabNavigator();