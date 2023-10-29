import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import CallAPI from "./QuizService";
import QuestionForm from "../../components/QuestionForm";
import { ctx } from "../../CtxData";

export default function Body() {
  // Define useStates.
  const ct = useContext(ctx);
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();

  const navigation = useNavigate();

  useEffect(() => {
    localStorage.setItem("startTime", Date.now());

    CallAPI(`https://server.nglearns.com/quizz/${id}`).then((res) => {
      setQuestionList(res.lsQuizz);
      // ct.setId(id);
    });
  }, []);
  const hanldeSubmit = () => {
    navigation("/result");
  };

  return (
    <div className="body">
      {Object.values(questionList).map((v, i) => {
        return (
          <div key={i} className="question">
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
