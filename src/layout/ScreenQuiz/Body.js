import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CallAPI from "./QuizService";

export default function Body() {
  // Define useStates.
  const [info, setInfo] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("email") == "null" ||
      localStorage.getItem("examCode") == "null"
    ) {
      navigation("/");
    }

    localStorage.setItem("startTime", Date.now());

    CallAPI("http://localhost:1880/quiz/1").then((res) => {
      setInfo(res.id);
      setQuestionList(res.lsQuizz);
    });
  }, []);

  const hanldeSubmit = () => {
    navigation("/result");
  };

  console.log(`Creating exam with code:  ${info}.`);

  return (
    <div className="body">
      {questionList.map((v, i) => {
        return (
          <div className="exam-question" key={i}>
            <p>
              <strong>
                {i}.{v.content}
              </strong>
            </p>
            {v.answer.map((e, j) => {
              return (
                <div className="answer-area" key={"question-" + j}>
                  <input
                    id={e.id}
                    type="radio"
                    value={e.content}
                    key={i + "." + j}
                    name={v.id}
                  />
                  <label htmlFor={e.id}>{e.content}</label>
                </div>
              );
            })}
          </div>
        );
      })}
      <Button
        text={"SUBMIT"}
        classContent={"button"}
        handleClick={hanldeSubmit}
      ></Button>
    </div>
  );
}
