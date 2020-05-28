/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { GoVerified } from "react-icons/go";

import {
  Container,
  Title,
  TitleFocus,
  TextBarHorizontal,
  TextBar,
  Text,
} from "./styles";

function SecondBar() {
  return (
    <Container>
      <Title>
        COM O<TitleFocus> BONECO CONSTANTINO </TitleFocus>
        SEUS PROBLEMAS
        <TitleFocus> ACABARAM!</TitleFocus>
      </Title>

      <TextBarHorizontal>
        <TextBar>
          <Text>- Treine quando e onde quiser.</Text>
          <Text>- Melhore suas técnicas e finalizações.</Text>
        </TextBar>

        <GoVerified size={110} color="#bc1010" />

        <TextBar>
          <Text>- Treine quando e onde quiser.</Text>
          <Text>- Melhore suas técnicas e finalizações.</Text>
        </TextBar>
      </TextBarHorizontal>
    </Container>
  );
}

export default SecondBar;
