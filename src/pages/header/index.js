import React from "react";

import bonecoImage from "../../assets/boneco-vermelho-left.png";
import bonecoImage2 from "../../assets/boneco-branco-left.png";

import {
  Container,
  MainBar,
  Title,
  Subtitle,
  Text,
  Button,
  TextButton,
  ImagesBar,
  Boneco1,
  Boneco2,
} from "./styles";

function header() {
  return (
    <Container>
      <verticalBar>
        <MainBar>
          <Title>
            BONECO
            <Subtitle>CONSTANTINO</Subtitle>
          </Title>

          <Text>
            Boneco sparring usado no treino de repetições de técnicas e
            movimentos de Jiu Jitsu, MMA, Judô e outras lutas de chão.
          </Text>

          <Button>
            <TextButton>COMPRAR</TextButton>
          </Button>
        </MainBar>

        <ImagesBar>
          <Boneco2 src={bonecoImage2} />
          <Boneco1 src={bonecoImage} />
        </ImagesBar>
      </verticalBar>
    </Container>
  );
}

export default header;
