import React, { useEffect, useState } from "react";

export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minute = parseInt(Math.floor(total_seconds / 60));

    let seconds = parseInt(total_seconds % 60);
    let minute = parseInt(total_minute % 60);

    return `${minute} : ${seconds}`;
  };

  return <div>{getFormattedTime(time)}</div>;
}
