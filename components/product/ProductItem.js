import React from "react";
//react-native
import { Text, Image } from "react-native";

//native-base
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return (
    <List.Item>
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
    </List.Item>
  );
};

export default ProductItem;
