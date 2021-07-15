import React from "react";
import productStore from "../../stores/productStore";
//native-base
import { List, Spinner } from "native-base";

//components
import ProductItem from "./ProductItem";

//styles
import { ListWrapper } from "./styles";

const ProductList = ({ products }) => {
  if (productStore.loading) return <Spinner />;
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <ListWrapper>
      <List>{productList}</List>
    </ListWrapper>
  );
};

export default ProductList;
