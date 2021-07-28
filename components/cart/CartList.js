import React from "react";

import { Spinner, List } from "native-base";

//stores
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";

//component
import CartItem from "./CartItem";

//observer
import { observer } from "mobx-react";

//styles
import { CheckoutButton, CheckoutButtonText } from "./styles";

const CartList = () => {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
