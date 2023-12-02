import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./ScreenResult.scss";
import { getPoint } from "../ScreenQuiz/QuizService";
import { useNavigate } from "react-router-dom";

export default function ScreenResult() {
  const [point, setPoint] = useState(0);
  const nav = useNavigate();
  let id = JSON.parse(localStorage.getItem("classId"));
  let data = JSON.parse(localStorage.getItem("result"));

  useEffect(() => {
    getPoint(
      `https://server.nglearns.com/answer/${id}`,
      JSON.stringify(data)
    ).then((res) => {
      setPoint(res);
    });
  });

  const handleSubmit = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <div className="container">
      <div className="result">
        <h1>Result</h1>
        <h2>Point: {point}</h2>
        <Button
          classContent={"result-button"}
          text={"Back to home"}
          handleClick={handleSubmit}
        ></Button>
      </div>
    </div>
  );
}
