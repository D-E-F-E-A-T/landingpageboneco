import React from "react";

import KG from "../../assets/Kg.png";
import Escudo from "../../assets/Escudo.png";
import Garantia from "../../assets/Garantia.png";
import Frete from "../../assets/Frete-grátis.png";
import Prof from "../../assets/Professores-e-Alunos.png";

import {
  Container,
  ElementsHorizontal,
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
      <ItensBar>
        <Title>CARACTERÍSTICAS</Title>

        <ElementsHorizontal>
          <ItemBar>
            <IconImage src={KG} />
            <TitleItem>até 45 Kilos</TitleItem>
            <Subtitle>(depende do material no enchimento)</Subtitle>
          </ItemBar>

          <ItemBar>
            <IconImage src={Escudo} />
            <TitleItem>Couro Sintético</TitleItem>
            <Subtitle>(resistente até duas tonaldas)</Subtitle>
          </ItemBar>

          <ItemBar>
            <IconImage src={Garantia} />
            <TitleItem>Garantia de 2 anos</TitleItem>
          </ItemBar>

          <ItemBar>
            <IconImage src={Frete} />
            <br />
            <br />
            <TitleItem>Frete Grátis</TitleItem>
          </ItemBar>

          <ItemBar>
            <IconImage src={Prof} />
            <TitleItem>Usado por alunos e professores</TitleItem>
          </ItemBar>
        </ElementsHorizontal>
      </ItensBar>
    </Container>
  );
}

export default NightBar;
