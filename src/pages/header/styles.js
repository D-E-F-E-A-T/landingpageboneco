import styled from "styled-components";
import backgroundImage from "../../assets/background-header-default.jpg";

export const Container = styled.div`
  height: 752px;
  background-image: url(${backgroundImage});
`;

export const verticalBar = styled.div`
  flex-direction: row;
`;

export const MainBar = styled.div`
  padding: 150px 0 0 150px;
`;

export const Title = styled.h1`
  color: #bc1010;
  font-size: 100px;
`;

export const Subtitle = styled.p`
  color: #fff;
  margin-top: -20px;
  font-size: 58px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 25px;
  width: 800px;
  margin: 50px 0 50px 0;
`;

export const Button = styled.button`
  padding: 20px 80px 20px 80px;
  background-color: #bc1010;
  box-shadow: 0 10px #6e0b0b;
  border: 0px;
`;

export const TextButton = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const ImagesBar = styled.div``;

export const Boneco1 = styled.img`
  position: absolute;
  height: 600px;
  margin: 0;
  left: 65%;
  top: 220px;
`;

export const Boneco2 = styled.img`
  position: absolute;
  height: 450px;
  margin: 0;
  left: 60%;
  top: 220px;
`;
