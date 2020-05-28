/* eslint-disable linebreak-style */
import React from "react";

import ReactDOM from "react-dom";

import "./global.css";
import Header from "./pages/Header";
import Satisfactionbar from "./pages/Satisfactionbar";
import SecondBar from "./pages/SecondBar";
import ThirdBar from "./pages/ThirdBar";
import FourthBar from "./pages/FourthBar";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Satisfactionbar />
    <SecondBar />
    <ThirdBar />
    <FourthBar />
  </React.StrictMode>,

  document.getElementById("root")
);
