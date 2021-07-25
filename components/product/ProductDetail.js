//libraries
import React from "react";

//native-base
import { Spinner } from "native-base";

//stores
import productStore from "../../stores/productStore";

//styles
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "../bakery/styles";

import { observer } from "mobx-react";

const ProductDetail = ({ navigation, route }) => {
  const { product } = route.params;
  if (productStore.loading) return <Spinner />;

  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: product.image }} />
        <BakeryDetailTitle>{product.name}</BakeryDetailTitle>
        <BakeryDetailTitle>{product.description}</BakeryDetailTitle>
        <BakeryDetailTitle>{product.price}</BakeryDetailTitle>
      </BakeryDetailWrapper>
    </>
  );
};

export default observer(ProductDetail);
