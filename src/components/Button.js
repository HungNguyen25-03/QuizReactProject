import React from "react";

export default function Button({ text, classContent, handleClick }) {
  return (
    <button className={classContent} onClick={handleClick}>
      {text}
    </button>
  );
}
