import React from "react";
import dislikeImage from "../../assets/dislike.png";

import {
  Container,
  HorizontalBar,
  ImageBar,
  Image,
  TextBar,
  Text,
} from "./styles";

function Satisfactionbar() {
  return (
    <Container>
      <HorizontalBar>
        <ImageBar>
          <Image src={dislikeImage} />
        </ImageBar>
      </HorizontalBar>

      <TextBar>
        <Text>Você está insatisfeito com sua luta?</Text>
        <Text>
          Está perdendo clientes na sua academia e não sabe o por que?
        </Text>
        <Text>Você se lesiona muito nos treino ?</Text>
        <Text>Gostaria de treinar, mas a academia está fechada?</Text>
        <Text>
          Seu parceiro de treino não aguenta 100, 50 ou até mesmo 25 repetições
          ?
        </Text>
      </TextBar>
    </Container>
  );
}

export default Satisfactionbar;
