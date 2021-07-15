import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import BakeryItem from "./BakeryItem";

//observer
import { observer } from "mobx-react";

//stores
import bakeryStore from "../../stores/bakeryStore";

//styles
import { ListWrapper } from "./styles";
const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{bakeryList}</List>
    </ListWrapper>
  );
};

export default observer(BakeryList);
