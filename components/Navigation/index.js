import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BakeryList from "../bakery/BakeryList";
import BakeryDetail from "../bakery/BakeryDetail";
import ProductDetail from "../product/ProductDetail";
import CartButton from "../cart/buttons/CartButton";
import CartList from "../cart/CartList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

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
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
