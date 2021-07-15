import "react-native-gesture-handler";
import React from "react";
//native-base
import { NativeBaseProvider } from "native-base";

//styles
import { ThemeProvider } from "styled-components";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};
export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
