/* eslint-disable linebreak-style */
import React from "react";

import ReactDOM from "react-dom";

import "./global.css";
import Header from "./pages/Header";
import Satisfactionbar from "./pages/Satisfactionbar";
import SecondBar from "./pages/SecondBar";
import ThirdBar from "./pages/ThirdBar";
import FourthBar from "./pages/FourthBar";
import FivethBar from "./pages/FivethBar";
import SixthBar from "./pages/SixthBar";
import SeventhBar from "./pages/SeventhBar";
import EightBar from "./pages/EightBar";
import NightBar from "./pages/NightBar";
import TenthBar from "./pages/TenthBar";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Satisfactionbar />
    <SecondBar />
    <ThirdBar />
    <FourthBar />
    <FivethBar />
    <SixthBar />
    <SeventhBar />
    <EightBar />
    <NightBar />
    <TenthBar />
  </React.StrictMode>,

  document.getElementById("root")
);
