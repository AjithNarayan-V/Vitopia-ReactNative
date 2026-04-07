import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import About1 from "../app/about1";
import About2 from "../app/about2";
import HomeScreen from "../app/index";
import type { RootParamList } from "./RouteTypes";

const Tab = createBottomTabNavigator<RootParamList>();

export function TabsLayout() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="About1"
        component={About1}
        options={{ title: "About 1" }}
      />
      <Tab.Screen
        name="About2"
        component={About2}
        options={{ title: "About 2", tabBarLabel: "About 2" }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <TabsLayout />
    </NavigationContainer>
  );
}
