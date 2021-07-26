import React, { useState } from "react";
//react-native
import { Text, Image } from "react-native";

//native-base
import { List, Button } from "native-base";

import NumericInput from "react-native-numeric-input";

//stores
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { productId: product.id, quantity };
    cartStore.addToCart(newItem);
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("ProductDetail", { product: product })}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <Text>{product.price} KD</Text>
      <NumericInput
        rounded
        totalWidth={80}
        totalHeight={40}
        initValue={quantity}
        minValue={1}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default ProductItem;
