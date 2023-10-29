import React from "react";
import Button from "../../components/Button";
import "./ScreenResult.scss";
import Score from "../../components/Score";

export default function ScreenResult() {
  return (
    <div className="container">
      <div className="result">
        <h1>Result</h1>
        <Score></Score>
        <Button classContent={"result-button"} text={"Submit"}></Button>
      </div>
    </div>
  );
}
