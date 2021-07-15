import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainter = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.3);
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 22px;
`;
