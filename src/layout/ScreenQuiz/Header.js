import React from "react";
import Timer from "../../components/Timer";
import Button from "../../components/Button";

export default function Header() {
  return (
    <div className="header">
      <h1>Class-Code</h1>
      <div className="timer">
        <Timer duration={60 * 60 * 1000}></Timer>
      </div>
      <Button text={"SUBMIT"} classContent={"button"}></Button>
    </div>
  );
}
