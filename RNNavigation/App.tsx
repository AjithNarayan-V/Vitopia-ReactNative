import DrawerNavigator from "./navigation/DrawerNavigator";
import DrawerWithTabs from "./navigation/DrawerWithTabs";
import TabNavigator from "./navigation/TabNavigator";

/*
Stack navigator setup (kept for learning/reference):

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import About1 from "./app/about1";
import About2 from "./app/about2";
import HomeScreen from "./app/index";

export type RootStackParamList = {
  Home: undefined;
  About1: { username: string; mood?: string };
  About2: { budget: number; currency: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About1"
          component={About1}
          options={{ title: "About 1" }}
        />
        <Stack.Screen
          name="About2"
          component={About2}
          options={{ title: "About 2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/

export default function App() {
  return <DrawerWithTabs  />;
}

/*
Drawer-only navigator setup (kept for learning/reference):

import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return <DrawerNavigator />;
}
*/

/*
Tab navigator setup (kept for learning/reference):

import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return <TabNavigator />;
}
*/
