import React, { useCallback, useEffect, useState } from "react";

export const ButtonClickCounter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //without useCallback
    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

  //with useCallback
  // const handleClick = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  useEffect(() => {
    console.log("handleClick function has been changed");
  }, [handleClick]);

  return (
    <div>
      <h1>UseCallBack function </h1>
      <p>Count :{count}</p>
      <button onClick={handleClick}>incresment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Text: {text}</p>
    </div>
  );
};
