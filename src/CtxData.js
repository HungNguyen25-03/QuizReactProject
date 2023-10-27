import React, { createContext, useState } from "react";

export const ctx = createContext();

export default function CtxData(props) {
  const [question, setQuestion] = useState([]);

  return (
    <ctx.Provider value={{ question, setQuestion }}>
      {props.children}
    </ctx.Provider>
  );
}
