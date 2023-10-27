import React, { useRef, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./ScreenHome.scss";
import { CLASS_CODE } from "../../const/domain";

export default function ScreenHome() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const hanldeSubmit = (e) => {
    if (code === CLASS_CODE) {
      nav("/exam");
    }
  };

  return (
    <div className="container">
      <div className="input-form">
        <h1>Class-Code</h1>
        <form onSubmit={hanldeSubmit}>
          <div className="textib">
            <input
              type="text"
              placeholder="********"
              onChange={handleChange}
              value={code}
            ></input>
          </div>
          <Button
            classContent={"home-button"}
            text={"Submit"}
            // handleClick={hanldeSubmit}
          ></Button>
        </form>
      </div>
    </div>
  );
}
