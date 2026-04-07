import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import About1 from "../app/about1";
import About2 from "../app/about2";
import HomeScreen from "../app/index";
import type { RootParamList } from "./RouteTypes";

const Drawer = createDrawerNavigator<RootParamList>();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="About1"
          component={About1}
          options={{ title: "About 1" }}
        />
        <Drawer.Screen
          name="About2"
          component={About2}
          options={{ title: "About 2" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
