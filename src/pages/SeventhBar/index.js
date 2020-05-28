import React from "react";

import ImageLesao from "../../assets/lesaso.png";
import { Container, ElementsBar, Image, TextBar, Title, Text } from "./styles";

function SeventhBar() {
  return (
    <Container>
      <ElementsBar>
        <Image src={ImageLesao} />

        <TextBar>
          <Title>EVITE LESÕES</Title>
          <Text>
            Com nosso Boneco, você evita se lesionar ou ser lesionado durante os
            treinos no uso das técnicas de Jiujitsu, MMA, Judô e outras lutas
            que podem ocasionar em lesões graves.
          </Text>
        </TextBar>
      </ElementsBar>
    </Container>
  );
}

export default SeventhBar;
