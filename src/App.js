import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenQuiz from "./layout/ScreenQuiz/ScreenQuiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenHome></ScreenHome>}></Route>
          <Route path="/quiz" element={<ScreenQuiz></ScreenQuiz>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
