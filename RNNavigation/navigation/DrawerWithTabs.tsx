import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabsLayout } from "./TabNavigator";

export type DrawerParamList = {
  Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerWithTabs() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tabs">
        <Drawer.Screen
          name="Tabs"
          component={TabsLayout}
          options={{ title: "Main Tabs" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
