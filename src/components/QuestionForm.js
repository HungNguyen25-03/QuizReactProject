import React, { useEffect } from "react";
import _ from "lodash";

export default function QuestionForm({ quesId, question, answer }) {
  const [firstAnswer, secondAnswer, thirdAnswer, fouthAnswer] = answer;

  //save the selected answer to local storage
  const handleChange = () => {
    let answer = document.querySelector(`input[name="${quesId}"]:checked`);
    let result = JSON.parse(localStorage.getItem("result"));
    if (!result) {
      localStorage.setItem(
        "result",
        JSON.stringify([
          {
            questionId: quesId,
            answerId: answer.id,
          },
        ])
      );
    } else {
      _.remove(result, (item) => item.questionId === quesId);
      result.push({ questionId: quesId, answerId: answer.id });
      localStorage.setItem("result", JSON.stringify(result));
    }
  };

  //reload page and keep the already selected answer
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("result")) || [];
    if (result) {
      let answer = _.find(result, (item) => item.questionId === quesId);
      if (answer) {
        document.getElementById(answer.answerId).checked = true;
      }
    }
  }, []);

  if (answer.length === 4) {
    return (
      <div className={"form"}>
        <form onChange={handleChange}>
          <h2 id={quesId}>{question}</h2>
          <input
            type="radio"
            name={quesId}
            id={firstAnswer.id}
            className="answer"
          ></input>
          <label htmlFor={firstAnswer.id} id="">
            {firstAnswer.content}
          </label>
          <br></br>
          <input
            type="radio"
            name={quesId}
            id={secondAnswer.id}
            className="answer"
          ></input>
          <label htmlFor={secondAnswer.id} id="">
            {secondAnswer.content}
          </label>
          <br></br>
          <input
            type="radio"
            name={quesId}
            id={thirdAnswer.id}
            className="answer"
          ></input>
          <label htmlFor={thirdAnswer.id} id="">
            {thirdAnswer.content}
          </label>
          <br></br>
          <input
            type="radio"
            name={quesId}
            id={fouthAnswer.id}
            className="answer"
            s
          ></input>
          <label htmlFor={fouthAnswer.id} id="">
            {fouthAnswer.content}
          </label>
          <br></br>
        </form>
      </div>
    );
  } else {
    return (
      <div className={"form"}>
        <form onChange={handleChange}>
          <h2 id={quesId}>{question}</h2>
          <input
            type="radio"
            name={quesId}
            id={firstAnswer.id}
            className="answer"
          ></input>
          <label htmlFor={firstAnswer.id} id="">
            {firstAnswer.content}
          </label>
          <br></br>
          <input
            type="radio"
            name={quesId}
            id={secondAnswer.id}
            className="answer"
          ></input>
          <label htmlFor={secondAnswer.id} id="">
            {secondAnswer.content}
          </label>
          <br></br>
        </form>
      </div>
    );
  }
}
