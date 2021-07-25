import React from "react";

//stores
import bakeryStore from "../../stores/bakeryStore";
import productStore from "../../stores/productStore";

//observer
import { observer } from "mobx-react";
import ProductList from "../product/ProductList";

//styles
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "./styles";

//native-base
import { Spinner } from "native-base";

const BakeryDetail = ({ navigation, route }) => {
  const { bakery } = route.params;
  if (bakeryStore.loading) return <Spinner />;

  const products = bakery.products.map((product) =>
    productStore.getProductById(product.id)
  );
  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <ProductList products={products} navigation={navigation} />
    </>
  );
};

export default observer(BakeryDetail);
