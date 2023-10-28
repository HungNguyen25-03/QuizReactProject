import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenQuiz from "./layout/ScreenQuiz/ScreenQuiz";
import ScreenResult from "./layout/ScreenResult/ScreenResult";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenHome></ScreenHome>}></Route>
          <Route path="/exam" element={<ScreenQuiz></ScreenQuiz>}></Route>
          <Route path="/result" element={<ScreenResult></ScreenResult>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
