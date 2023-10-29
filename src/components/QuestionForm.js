import React, { useEffect } from "react";

export default function QuestionForm({ quesId, question, answer }) {
  const [firstAnswer, secondAnswer, thirdAnswer, fouthAnswer] = answer;

  const handleChange = () => {
    let checked = Array.from(
      document.querySelectorAll("input[type=radio]:checked")
    ).map((e) => e.id);
    let quesId = Array.from(document.querySelectorAll("h2"));
    checked.forEach((item) => {
      quesId.forEach((e) => {
        localStorage.setItem(
          `${e.id}`,
          JSON.stringify({
            questionId: e.id,
            answerId: item,
          })
        );
      });
    });
  };

  const renderUI = () => {
    let quesId = Array.from(document.querySelectorAll("h2"));
    quesId.forEach((e) => {
      const answer = JSON.parse(localStorage.getItem(`${e.id}`));
    });
  };

  renderUI();

  return (
    <div className={"form"}>
      <form>
        <h2 id={quesId}>{question}</h2>
        <input
          type="radio"
          name="answer"
          id={firstAnswer.id}
          className="answer"
          onChange={handleChange}
        ></input>
        <label htmlFor={firstAnswer.id} id="">
          {firstAnswer.content}
        </label>
        <br></br>
        <input
          type="radio"
          name="answer"
          id={secondAnswer.id}
          className="answer"
          onChange={handleChange}
        ></input>
        <label htmlFor={secondAnswer.id} id="">
          {secondAnswer.content}
        </label>
        <br></br>
        <input
          type="radio"
          name="answer"
          id={thirdAnswer.id}
          className="answer"
          onChange={handleChange}
        ></input>
        <label htmlFor={thirdAnswer.id} id="">
          {thirdAnswer.content}
        </label>
        <br></br>
        <input
          type="radio"
          name="answer"
          id={fouthAnswer.id}
          className="answer"
          s
          onChange={handleChange}
        ></input>
        <label htmlFor={fouthAnswer.id} id="">
          {fouthAnswer.content}
        </label>
        <br></br>
      </form>
    </div>
  );
}
