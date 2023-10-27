import React from "react";

export default function QuestionForm({ question, answer }) {
  const [firstAnswer, secondAnswer, thirdAnswer, fouthAnswer] = answer;
  
  return (
    <div className={"form"}>
      <form>
        <h2 id={question.id} className="question">{question.content}</h2>
        <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_1`} className="answer"></input>
        <label htmlFor="1" id={firstAnswer.id}>
          {firstAnswer.content}
        </label>
        <br></br>
        <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_2`} className="answer"></input>
        <label htmlFor="2" id={secondAnswer.id}>
          {secondAnswer.content}
        </label>
        <br></br>
        <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_3`} className="answer"></input>
        <label htmlFor="3" id={thirdAnswer.id}>
          {thirdAnswer.content}
        </label>
        <br></br>
        <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_4`} className="answer"></input>
        <label htmlFor="4" id={fouthAnswer.id}>
          {fouthAnswer.content}
        </label>
        <br></br>
      </form>
    </div>
  );
}
