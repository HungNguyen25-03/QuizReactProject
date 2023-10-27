import React from "react";
import Timer from "../../components/Timer";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  const hanldeSubmit = () => {
    navigation("/result");
  };
  return (
    <div className="header">
      <h1>Class-Code</h1>
      <div className="timer">
        <Timer duration={60 * 60 * 1000}></Timer>
      </div>
      <Button
        text={"SUBMIT"}
        classContent={"button"}
        handleClick={hanldeSubmit}
      ></Button>
    </div>
  );
}
