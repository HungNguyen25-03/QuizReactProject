import React, { useContext, useRef, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./ScreenHome.scss";
import { CLASS_CODE } from "../../const/domain";
import { ctx } from "../../CtxData";

export default function ScreenHome() {
  const ct = useContext(ctx);
  const [code, setCode] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const hanldeSubmit = (e, id) => {
    if (code === CLASS_CODE) {
      nav(`/exam/${id}`);
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
