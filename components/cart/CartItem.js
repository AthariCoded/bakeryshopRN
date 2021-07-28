import { List } from "native-base";
import { Text } from "react-native";
import React from "react";

import { TotalPrice, TrashIcon } from "./styles";

//stores
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price} KD x {item.quantity}
      </Text>
      <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      <TrashIcon
        name="trash"
        size={24}
        onPress={() => cartStore.deleteFromCart(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
