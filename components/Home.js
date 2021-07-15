import React from "react";

//styles
import {
  HomeBackground,
  OverLayContainter,
  BottomStyling,
  ButtonStyling,
  TopStyling,
  Title,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://www.whats4eats.com/files/course-desserts-macarons-flickr-68711844%40N07-Michael-Stern-15204286153-4x3.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>Bakery</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
