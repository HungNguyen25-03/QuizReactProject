import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CallAPI from "./QuizService";
import QuestionForm from "../../components/QuestionForm";

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
      {Object.values(questionList).map((v, i) => {
        return (
          <div key={i}>
            {
              <QuestionForm
                question={v.content}
                answer={v.answer}
                quesId={v.id}
              ></QuestionForm>
            }
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
