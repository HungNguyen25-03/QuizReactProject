import React, { useEffect, useState } from "react";
import "./ScreenQuiz.scss";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import QuestionForm from "../../components/QuestionForm";
import CallAPI from "./QuizService";

export default function ScreenQuiz() {

  const [info, setInfo] = useState("");
  const [question, setQuestion] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('email') == "null" || localStorage.getItem('examCode') == "null") {
        navigation('/');
    }
    CallAPI("http://localhost:1880/quizz/1")
    .then ((res) => {setInfo(res.id); setQuestion(res.lsQuizz);})
}, []);

  return (
    <div className="container-quiz">
      <Header></Header>
      {question.map((v, i) => {
          return <QuestionForm key={i} question={v} answer={v.answer} />
        })
      }
      <Footer></Footer>
    </div>
  );
}
