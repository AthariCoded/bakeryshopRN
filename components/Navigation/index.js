import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BakeryList from "../bakery/BakeryList";
import BakeryDetail from "../bakery/BakeryDetail";

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BakeryList"
        component={BakeryList}
        options={{
          title: "Choose a Bakery",
        }}
      />
      <Stack.Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
          };
        }}
      />
    </Stack.Navigator>
  );
}
