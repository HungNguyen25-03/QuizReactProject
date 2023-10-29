import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenHome from "./layout/ScreenHome/ScreenHome";
import ScreenResult from "./layout/ScreenResult/ScreenResult";
const ScreenQuiz = lazy(() => import("./layout/ScreenQuiz/ScreenQuiz"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenHome></ScreenHome>}></Route>
          <Route
            path="/exam/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <ScreenQuiz></ScreenQuiz>
              </Suspense>
            }
          ></Route>
          <Route path="/result" element={<ScreenResult></ScreenResult>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
