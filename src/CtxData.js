import React, { createContext, useState } from "react";

export const ctx = createContext();

export default function CtxData(props) {
  const [id, setId] = useState("");

  return <ctx.Provider value={{ id, setId }}>{props.children}</ctx.Provider>;
}
