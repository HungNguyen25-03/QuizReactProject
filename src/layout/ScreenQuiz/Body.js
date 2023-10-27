import React from "react";
import QuestionForm from "../../components/QuestionForm";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const nav = useNavigate();

  return (
    <div className="body">
      <div className="quiz-form">
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
        <QuestionForm
          answer={[1, 2, 3, 4]}
          question={"Question"}
        ></QuestionForm>
      </div>
      <Button text={"SUBMIT"} classContent={"button"}></Button>
    </div>
  );
}
