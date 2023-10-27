import React from "react";

export default function QuestionForm({ question, answer }) {
  const [firstAnswer, secondAnswer, thirdAnswer, fouthAnswer] = answer;

  return (
    <div className={"form"}>
      <form>
        <h2 id="question">{question}</h2>
        <input type="radio" name="answer" id="1" className="answer"></input>
        <label htmlFor="1" id="">
          {firstAnswer}
        </label>
        <br></br>
        <input type="radio" name="answer" id="2" className="answer"></input>
        <label htmlFor="2" id="">
          {secondAnswer}
        </label>
        <br></br>
        <input type="radio" name="answer" id="3" className="answer"></input>
        <label htmlFor="3" id="">
          {thirdAnswer}
        </label>
        <br></br>
        <input type="radio" name="answer" id="4" className="answer"></input>
        <label htmlFor="4" id="">
          {fouthAnswer}
        </label>
        <br></br>
      </form>
    </div>
  );
}
