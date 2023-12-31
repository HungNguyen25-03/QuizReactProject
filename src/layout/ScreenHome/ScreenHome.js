import React, { useContext, useRef, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import BgVideo from "/Mern_Stark/ReactJS/QuizProject/src/asserts/videoBg.mp4";
import "./ScreenHome.scss";
import { ctx } from "../../CtxData";

export default function ScreenHome() {
  const ct = useContext(ctx);
  const [code, setCode] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setCode(e.target.value);
  };

  const handleSubmit = (id) => () => {
    nav(`/exam/${id}`);
    localStorage.setItem("classId", JSON.stringify(id));
  };

  return (
    <div className="container">
      <div className="bg">
        <video src={BgVideo} autoPlay muted loop></video>
      </div>
      <div className="input-form">
        <h1>Class-Code</h1>
        <form>
          <input
            type="text"
            placeholder="*********"
            onChange={handleChange}
            value={code}
          ></input>
          <p className="error-text"></p>

          <Button
            classContent={"home-button"}
            text={"Submit"}
            handleClick={handleSubmit(code)}
          ></Button>
        </form>
      </div>
    </div>
  );
}
