import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(FontAwesome)`
  color: ${(props) => props.theme.white};
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 20px;
`;
export const TrashIcon = styled(FontAwesome)`
  color: ${(props) => props.theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
