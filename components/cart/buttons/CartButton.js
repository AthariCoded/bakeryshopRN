import React from "react";

//react-native
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled, CartTextStyled, SignoutStyled } from "../styles";

//store
import cartStore from "../../../stores/cartStore";
import authStore from "../../../stores/authStore";

//native-base
import { Button } from "native-base";

//observer
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "You need to signin before checkout",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  const handleExit = () => {
    if (authStore.user) {
      authStore.signout;
      navigation.navigate("CartList");
    }
  };
  return (
    <>
      <Button onPress={handlePress}>
        <CartButtonStyled name="cart-arrow-down" size={24} />
        <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      </Button>
      <SignoutStyled onPress={handleExit}>Exit</SignoutStyled>
    </>
  );
};

export default observer(CartButton);
