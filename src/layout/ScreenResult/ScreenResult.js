import React, { useEffect } from "react";
import Button from "../../components/Button";
import "./ScreenResult.scss";
import Score from "../../components/Score";
import { useParams } from "react-router-dom";

export default function ScreenResult() {
  let id = JSON.parse(localStorage.getItem("classId"));
  let data = JSON.parse(localStorage.getItem("result"));
  const result = fetch(`https://server.nglearns.com/answer/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  console.log(data);
  useEffect(() => {
    data = [];
    localStorage.setItem("result", JSON.stringify(data));
  }, []);
  console.log("After delete" + data);

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
