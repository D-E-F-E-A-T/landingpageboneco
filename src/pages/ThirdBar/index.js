import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

import {
  Container,
  HeaderBar,
  Title,
  IconsBar,
  VideoBar,
  Button,
  TextButton,
} from "./styles";

function ThirdBar() {
  return (
    <Container>
      <HeaderBar>
        <IconsBar>
          <BsChevronDoubleDown size={70} color="#000" />
        </IconsBar>
        <Title>DEMONSTRAÇÃO DO BONECO CONSTANTINO</Title>
        <IconsBar>
          <BsChevronDoubleDown size={70} color="#000" />
        </IconsBar>
      </HeaderBar>

      <VideoBar>
        <iframe
          title="demonstracao"
          width="1091"
          height="614"
          src="https://www.youtube.com/embed/85m13hVC160?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoBar>

      <Button>
        <TextButton>QUERO COMPRAR AGORA!</TextButton>
      </Button>
    </Container>
  );
}

export default ThirdBar;
