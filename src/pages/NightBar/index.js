import React from "react";

import KG from "../../assets/Kg.png";
import Escudo from "../../assets/Escudo.png";
import Garantia from "../../assets/Garantia.png";
import Frete from "../../assets/Frete-grátis.png";
import Prof from "../../assets/Professores-e-Alunos.png";

import {
  Container,
  ItensBar,
  Title,
  ItemBar,
  IconImage,
  TitleItem,
  Subtitle,
} from "./styles";

function NightBar() {
  return (
    <Container>
      <Title>CARACTERÍSTICAS</Title>
      <ItensBar>
        <ItemBar>
          <IconImage src={KG} />
          <TitleItem>até 45 Kilos</TitleItem>
          <Subtitle>(depende do material no enchimento)</Subtitle>
        </ItemBar>

        <ItemBar>
          <IconImage src={Escudo} />
          <TitleItem>até 45 Kilos</TitleItem>
          <Subtitle>(depende do material no enchimento)</Subtitle>
        </ItemBar>

        <ItemBar>
          <IconImage src={Garantia} />
          <TitleItem>até 45 Kilos</TitleItem>
          <Subtitle>(depende do material no enchimento)</Subtitle>
        </ItemBar>

        <ItemBar>
          <IconImage src={Frete} />
          <TitleItem>até 45 Kilos</TitleItem>
          <Subtitle>(depende do material no enchimento)</Subtitle>
        </ItemBar>

        <ItemBar>
          <IconImage src={Prof} />
          <TitleItem>até 45 Kilos</TitleItem>
          <Subtitle>(depende do material no enchimento)</Subtitle>
        </ItemBar>
      </ItensBar>
    </Container>
  );
}

export default NightBar;
