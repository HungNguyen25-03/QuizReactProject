import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./ScreenHome.scss";

export default function ScreenHome() {
  const nav = useNavigate();
  const hanldeSubmit = () => {
    nav("/quiz");
  };
  return (
    <div className="container">
      <div className="input-form">
        <h1>Class-Code</h1>
        <div className="textib">
          <input type="text" placeholder="********"></input>
        </div>
        <Button
          classContent={"home-button"}
          text={"Submit"}
          handleClick={hanldeSubmit}
        ></Button>
      </div>
    </div>
  );
}
