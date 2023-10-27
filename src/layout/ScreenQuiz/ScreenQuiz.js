import React from "react";
import "./ScreenQuiz.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function ScreenQuiz() {
  return (
    <div className="container-quiz">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}
