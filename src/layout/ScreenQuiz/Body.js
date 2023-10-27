import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CallAPI from "./QuizService";

export default function Body() {
  // Define useStates.
  const [id, setId] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    localStorage.setItem("startTime", Date.now());

    CallAPI(
      "https://server.nglearns.com/quizz/285498f5-3486-434d-a459-bedb6bcea7ce"
    ).then((res) => {
      setQuestionList(res.lsQuizz);
    });
  }, []);

  const hanldeSubmit = () => {
    navigation("/result");
  };

  return (
    <div className="body">
      {Object.keys(questionList).map((v, i) => {
        return (
          <div key={i}>
            {Object.values(questionList).map((ques, j) => {
              return (
                <div className="exam-question">
                  <strong>
                    <p key={j}>{ques.content}</p>
                  </strong>
                  {ques.answer.map((ans, e) => {
                    return (
                      <div className="answer-area">
                        <input
                          id={ans.id}
                          type="radio"
                          value={e.content}
                          key={j + "." + e}
                          name={ques.id}
                        ></input>
                        <label htmlFor={ans.id}>{ans.content}</label>
                      </div>
                    );
                  })}
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
